param(
  [Parameter(Mandatory = $true)]
  [string]$DestinationRoot
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$workspace = [System.IO.Path]::GetFullPath((Split-Path -Parent $PSScriptRoot))
$destination = [System.IO.Path]::GetFullPath($DestinationRoot)

if ($destination.TrimEnd('\') -eq $workspace.TrimEnd('\')) {
  throw "Backup destination cannot be the workspace itself."
}
if ($destination.StartsWith($workspace.TrimEnd('\') + '\', [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Backup destination must be outside the workspace."
}

$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$finalBackupDir = Join-Path $destination "Linshi-Studio-$stamp"
$backupDir = $finalBackupDir + '.incomplete'
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null

$excludedTop = @('.git', 'node_modules', '.next', 'out', 'dist', 'tmp', '.playwright-cli')
$excludedSensitiveRoots = @(
  'output\playwright\social-publisher-profile',
  'output\playwright\zoho-mail-profile'
)
$sensitiveNamePattern = '(?i)(^|\\)(\.env([^\\]*)?|[^\\]*(credential|secret|password|auth-state|storage-state|cookie-export)[^\\]*|id_rsa[^\\]*|[^\\]+\.(pem|key))$'

function Test-IncludedFile {
  param([string]$RelativePath)

  $parts = $RelativePath.Split([char]92)
  if ($parts.Count -gt 0 -and $excludedTop -contains $parts[0]) { return $false }
  if ($parts -contains 'node_modules' -or $parts -contains '.next' -or $parts -contains '.venv' -or $parts -contains '__pycache__') { return $false }
  foreach ($root in $excludedSensitiveRoots) {
    if ($RelativePath.Equals($root, [System.StringComparison]::OrdinalIgnoreCase) -or
        $RelativePath.StartsWith($root + '\', [System.StringComparison]::OrdinalIgnoreCase)) {
      return $false
    }
  }
  if ($RelativePath -match $sensitiveNamePattern) { return $false }
  return $true
}

$included = @(Get-ChildItem -LiteralPath $workspace -Recurse -File -Force -ErrorAction Stop |
  ForEach-Object {
    # Windows PowerShell 5.1 does not expose Path.GetRelativePath(). Every
    # enumerated item is below $workspace, so a validated substring is safe.
    $relative = $_.FullName.Substring($workspace.TrimEnd('\').Length).TrimStart('\')
    if (Test-IncludedFile -RelativePath $relative) {
      [pscustomobject]@{
        FullName = $_.FullName
        RelativePath = $relative
        Length = $_.Length
      }
    }
  })

if (-not $included -or $included.Count -eq 0) {
  throw "No files selected for backup."
}

$fileList = Join-Path $backupDir 'critical-file-list.txt'
[System.IO.File]::WriteAllLines($fileList, [string[]]$included.RelativePath, [System.Text.UTF8Encoding]::new($false))

# Windows' bundled bsdtar cannot reliably read file-list paths containing all
# Unicode characters used by generated campaign assets. Build the archive with
# .NET instead so every selected path is preserved without ANSI conversion.
$archive = Join-Path $backupDir 'linshi-studio-critical-data.zip'
$zip = [System.IO.Compression.ZipFile]::Open($archive, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  foreach ($item in $included) {
    $entryName = $item.RelativePath.Replace('\', '/')
    $entry = $zip.CreateEntry($entryName, [System.IO.Compression.CompressionLevel]::Optimal)
    $source = [System.IO.File]::Open($item.FullName, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite)
    $destinationStream = $entry.Open()
    try {
      $source.CopyTo($destinationStream)
    } finally {
      $destinationStream.Dispose()
      $source.Dispose()
    }
  }
} finally {
  $zip.Dispose()
}

$bundle = Join-Path $backupDir 'linshi-studio-git-history.bundle'
& git -C $workspace bundle create $bundle --all
if ($LASTEXITCODE -ne 0) { throw "git bundle create failed with exit code $LASTEXITCODE" }
& git -C $workspace bundle verify $bundle | Set-Content -LiteralPath (Join-Path $backupDir 'git-bundle-verification.txt') -Encoding utf8
if ($LASTEXITCODE -ne 0) { throw "git bundle verify failed with exit code $LASTEXITCODE" }

$manifestRows = foreach ($item in $included) {
  $hash = Get-FileHash -Algorithm SHA256 -LiteralPath $item.FullName
  [pscustomobject]@{
    RelativePath = $item.RelativePath
    Length = $item.Length
    SHA256 = $hash.Hash.ToLowerInvariant()
  }
}
$manifestRows | Export-Csv -LiteralPath (Join-Path $backupDir 'critical-files-sha256.csv') -NoTypeInformation -Encoding utf8

$gitCommit = (& git -C $workspace rev-parse HEAD).Trim()
$gitBranch = (& git -C $workspace branch --show-current).Trim()
$gitRemotes = (& git -C $workspace remote -v) -join "`n"
$metadata = [ordered]@{
  schemaVersion = 1
  createdAt = (Get-Date).ToUniversalTime().ToString('o')
  workspace = $workspace
  backupDirectory = $finalBackupDir
  includedFiles = $included.Count
  includedBytes = ($included | Measure-Object Length -Sum).Sum
  gitCommit = $gitCommit
  gitBranch = $gitBranch
  gitRemotes = $gitRemotes
  excludedTopLevel = $excludedTop
  excludedSensitiveRoots = $excludedSensitiveRoots
  sensitiveDataPolicy = 'Browser sessions, cookies, passwords, environment secrets, private keys and auth-state files are excluded from the ordinary backup.'
}
$metadata | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath (Join-Path $backupDir 'backup-metadata.json') -Encoding utf8

Copy-Item -LiteralPath (Join-Path $workspace 'docs\LINSHI-STUDIO-RECOVERY.md') -Destination (Join-Path $backupDir 'LINSHI-STUDIO-RECOVERY.md') -Force

$checksumTargets = @(
  $archive,
  $bundle,
  (Join-Path $backupDir 'critical-files-sha256.csv'),
  (Join-Path $backupDir 'backup-metadata.json'),
  (Join-Path $backupDir 'LINSHI-STUDIO-RECOVERY.md')
)
$checksumLines = foreach ($target in $checksumTargets) {
  $hash = Get-FileHash -Algorithm SHA256 -LiteralPath $target
  "{0}  {1}" -f $hash.Hash.ToLowerInvariant(), (Split-Path -Leaf $target)
}
$checksumLines | Set-Content -LiteralPath (Join-Path $backupDir 'BACKUP-CHECKSUMS.sha256') -Encoding ascii

# Only a fully generated and checksummed snapshot receives the final name.
# Interrupted runs remain visibly marked as .incomplete.
Move-Item -LiteralPath $backupDir -Destination $finalBackupDir
$backupDir = $finalBackupDir
$archive = Join-Path $backupDir 'linshi-studio-critical-data.zip'
$bundle = Join-Path $backupDir 'linshi-studio-git-history.bundle'

[pscustomobject]@{
  BackupDirectory = $backupDir
  IncludedFiles = $included.Count
  IncludedGB = [math]::Round((($included | Measure-Object Length -Sum).Sum / 1GB), 3)
  ArchiveGB = [math]::Round(((Get-Item -LiteralPath $archive).Length / 1GB), 3)
  GitBundleGB = [math]::Round(((Get-Item -LiteralPath $bundle).Length / 1GB), 3)
  Checksums = (Join-Path $backupDir 'BACKUP-CHECKSUMS.sha256')
}
