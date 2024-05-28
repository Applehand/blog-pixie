import { Cropper } from "./Cropper";
import { Resizer } from "./Resizer";
import { useState, useEffect } from "react";
import "../styles/ImageContainer.css";

export function ImageContainer({
  image,
  onImageUpload,
  cropperToggled,
  onCrop,
}) {
  const [croppedImage, setCroppedImage] = useState(null);

  useEffect(() => {
    if (!cropperToggled) {
      setCroppedImage(null);
    }
  }, [cropperToggled]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const img = new Image();
    img.onload = () => {
      console.log("Image loaded:", img);
      onImageUpload(img);
    };
    img.src = URL.createObjectURL(file);
  };

  const handleCrop = (croppedImageData) => {
    console.log("Cropped image data:", croppedImageData);
    const croppedImg = new Image();
    croppedImg.onload = () => {
      croppedImg.width = croppedImageData.width;
      croppedImg.height = croppedImageData.height;
      setCroppedImage(croppedImg);
      onCrop(croppedImg);
    };
    croppedImg.src = image.src;
  };

  let imageComponent;

  if (image) {
    if (cropperToggled) {
      imageComponent = <Cropper image={image} onCrop={handleCrop} />;
    } else {
      if (croppedImage) {
        imageComponent = (
          <Resizer
            image={croppedImage}
            newHeight={croppedImage.height}
            newWidth={croppedImage.width}
          />
        );
      } else {
        const displayImage = croppedImage || image;
        imageComponent = (
          <Resizer
            image={displayImage}
            newHeight={displayImage.height}
            newWidth={displayImage.width}
          />
        );
      }
    }
  }

  return (
    <div id="image-container">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageComponent}
    </div>
  );
}
