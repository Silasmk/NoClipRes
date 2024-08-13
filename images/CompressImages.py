import cv2
import os

def resize_and_crop(image):
    height, width = image.shape[:2]
    if height == width:
        return image
    
    if height > width:
        diff = height - width
        crop_start = diff // 2
        crop_end = height - crop_start
        square_image = image[crop_start:crop_end, :]
    else:
        diff = width - height
        crop_start = diff // 2
        crop_end = width - crop_start
        square_image = image[:, crop_start:crop_end]
    
    return cv2.resize(square_image, (min(height, width), min(height, width)))

def process_images(input_folder, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for filename in os.listdir(input_folder):
        filepath = os.path.join(input_folder, filename)
        if os.path.isfile(filepath):
            image = cv2.imread(filepath)
            if image is None:
                continue

            if filename.lower().endswith('.png'):
                image = resize_and_crop(image)
                filename = filename.rsplit('.', 1)[0] + '.jpg'
                os.remove(filepath)  # Remove the original PNG file
            
            output_path = os.path.join(output_folder, filename)
            cv2.imwrite(output_path, image, [int(cv2.IMWRITE_JPEG_QUALITY), 50])  # Set quality to 50%

input_folder = r'C:\Users\silic\Desktop\ResJu\NoClip Previewer\NoClipRes\images'
output_folder = r'C:\Users\silic\Desktop\ResJu\NoClip Previewer\NoClipRes\images'
process_images(input_folder, output_folder)