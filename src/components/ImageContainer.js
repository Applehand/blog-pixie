import { Cropper } from "./Cropper";
import { Resizer } from "./Resizer";
import { useState } from "react";
import '../styles/ImageContainer.css';

export function ImageContainer({ image, onImageUpload, cropperToggled }) {
  const [croppedImage, setCroppedImage] = useState(null)

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        handleImageUpload(file);
    };

    const handleImageUpload = async (file) => {
        const img = new Image();
        img.onload = () => {
            onImageUpload(img);
        };
        img.src = URL.createObjectURL(file);
    };

    const handleCrop = (croppedImageData) => {
      setCroppedImage(croppedImageData);
  };

    let imageComponent;

    if (image) {
      if (cropperToggled) {
        imageComponent = <Cropper image={image} onCrop={handleCrop} />;
      } else {
        if (croppedImage) {
          imageComponent = <Resizer image={croppedImage} newHeight={croppedImage.height} newWidth={croppedImage.width} />;
        } else {
          imageComponent = <Resizer image={image} newHeight={image.height} newWidth={image.width} />;
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