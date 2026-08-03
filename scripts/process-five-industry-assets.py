from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "output" / "imagegen" / "five-industry"

CASES = {
    "marlowe-dental": {
        "reception": "marlowe-reception.png",
        "consultation": "marlowe-consultation.png",
        "treatment-room": "marlowe-treatment-room.png",
        "team": "marlowe-team.png",
    },
    "gable-and-mere": {
        "exterior": "gable-exterior.png",
        "bedroom": "gable-bedroom.png",
        "breakfast": "gable-breakfast.png",
        "bathroom": "gable-bathroom.png",
    },
}


def fit_within(image: Image.Image, max_width: int = 1800) -> Image.Image:
    if image.width <= max_width:
        return image.copy()
    height = round(image.height * max_width / image.width)
    return image.resize((max_width, height), Image.Resampling.LANCZOS)


def cover_crop(image: Image.Image, width: int, height: int) -> Image.Image:
    target_ratio = width / height
    source_ratio = image.width / image.height
    if source_ratio > target_ratio:
        crop_width = round(image.height * target_ratio)
        left = (image.width - crop_width) // 2
        box = (left, 0, left + crop_width, image.height)
    else:
        crop_height = round(image.width / target_ratio)
        top = (image.height - crop_height) // 2
        box = (0, top, image.width, top + crop_height)
    return image.crop(box).resize((width, height), Image.Resampling.LANCZOS)


def main() -> None:
    for case_slug, assets in CASES.items():
        output_dir = ROOT / "public" / "assets" / case_slug
        output_dir.mkdir(parents=True, exist_ok=True)

        first_image = None
        for asset_name, source_name in assets.items():
            with Image.open(SOURCE_DIR / source_name) as source:
                image = source.convert("RGB")
                if first_image is None:
                    first_image = image.copy()
                resized = fit_within(image)
                output_path = output_dir / f"{asset_name}.webp"
                resized.save(output_path, "WEBP", quality=88, method=6)
                print(f"{output_path.relative_to(ROOT)} | {resized.width}x{resized.height}")

        if first_image is not None:
            og = cover_crop(first_image, 1200, 630)
            og_path = output_dir / "og.webp"
            og.save(og_path, "WEBP", quality=88, method=6)
            print(f"{og_path.relative_to(ROOT)} | {og.width}x{og.height}")


if __name__ == "__main__":
    main()
