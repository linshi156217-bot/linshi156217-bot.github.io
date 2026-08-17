param()

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$workspace = [System.IO.Path]::GetFullPath((Split-Path -Parent $PSScriptRoot))
$backupScript = Join-Path $PSScriptRoot 'create-safe-backup.ps1'
$canonicalRoot = 'D:\Linshi-Studio-Backups'
$copyRoots = @(
  'C:\Users\Administrator\Desktop\Linshi-Studio-Backups',
  'C:\Users\Administrator\OneDrive\Linshi-Studio-Backups'
)

function Test-BackupChecksums {
  param([Parameter(Mandatory = $true)][string]$BackupDirectory)

  $failures = @()
  $checksumFile = Join-Path $BackupDirectory 'BACKUP-CHECKSUMS.sha256'
  foreach ($line in Get-Content -LiteralPath $checksumFile) {
    if ($line -match '^([0-9a-f]{64})  (.+)$') {
      $expected = $matches[1]
      $name = $matches[2]
      $target = Join-Path $BackupDirectory $name
      if (-not (Test-Path -LiteralPath $target)) {
        $failures += "MISSING: $name"
        continue
      }
      $actual = (Get-FileHash -Algorithm SHA256 -LiteralPath $target).Hash.ToLowerInvariant()
      if ($actual -ne $expected) { $failures += "HASH: $name" }
    }
  }
  return @($failures)
}

New-Item -ItemType Directory -Path $canonicalRoot -Force | Out-Null
$rawResult = @(& $backupScript -DestinationRoot $canonicalRoot)
$result = $rawResult | Where-Object { $_.PSObject.Properties.Name -contains 'BackupDirectory' } | Select-Object -Last 1
if (-not $result) { throw 'The canonical backup did not return a completion record.' }

$canonical = [System.IO.Path]::GetFullPath([string]$result.BackupDirectory)
if (-not $canonical.StartsWith($canonicalRoot + '\', [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Unexpected canonical backup path: $canonical"
}
$canonicalFailures = @(Test-BackupChecksums -BackupDirectory $canonical)
if ($canonicalFailures.Count -gt 0) {
  throw "Canonical checksum verification failed: $($canonicalFailures -join '; ')"
}

$copies = @()
foreach ($root in $copyRoots) {
  $rootFull = [System.IO.Path]::GetFullPath($root)
  New-Item -ItemType Directory -Path $rootFull -Force | Out-Null
  $destination = Join-Path $rootFull (Split-Path -Leaf $canonical)
  if (Test-Path -LiteralPath $destination) {
    throw "Backup copy already exists: $destination"
  }
  Copy-Item -LiteralPath $canonical -Destination $destination -Recurse
  $copyFailures = @(Test-BackupChecksums -BackupDirectory $destination)
  if ($copyFailures.Count -gt 0) {
    throw "Copy checksum verification failed at ${destination}: $($copyFailures -join '; ')"
  }
  $copies += [pscustomobject]@{
    Destination = $destination
    ChecksumFailures = 0
  }
}

$oneDriveExe = 'C:\Program Files\Microsoft OneDrive\OneDrive.exe'
if ((Test-Path -LiteralPath $oneDriveExe) -and -not (Get-Process -Name OneDrive -ErrorAction SilentlyContinue)) {
  Start-Process -FilePath $oneDriveExe -WindowStyle Hidden
}

$summary = [pscustomobject]@{
  CompletedAt = (Get-Date).ToUniversalTime().ToString('o')
  Workspace = $workspace
  CanonicalBackup = $canonical
  CanonicalChecksumFailures = 0
  Copies = $copies
  OneDriveClientRunning = [bool](Get-Process -Name OneDrive -ErrorAction SilentlyContinue)
  OneDriveNote = 'The local OneDrive copy is verified. Confirm a green check in File Explorer before treating cloud upload as complete.'
}

$log = Join-Path $canonicalRoot 'backup-runs.jsonl'
($summary | ConvertTo-Json -Depth 6 -Compress) | Add-Content -LiteralPath $log -Encoding utf8
$summary

