import os
from PIL import Image

def remove_white_bg(image_path):
    print(f"Processing {image_path}...")
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Change all white (also shades of whites)
            # to transparent
            if item[0] > 200 and item[1] > 200 and item[2] > 200:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        
        # Save as PNG
        file_name = os.path.splitext(image_path)[0]
        new_path = f"{file_name}.png"
        img.save(new_path, "PNG")
        print(f"Saved to {new_path}")
        return new_path
    except Exception as e:
        print(f"Failed to process {image_path}: {e}")
        return None

img_dir = "/home/nibax/Projects/portofolio/assets/img"
files = os.listdir(img_dir)

for file in files:
    if file.lower().endswith(('.jpg', '.jpeg')):
        full_path = os.path.join(img_dir, file)
        remove_white_bg(full_path)
