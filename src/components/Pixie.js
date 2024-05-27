import { ImageContainer } from "./ImageContainer";
import { FormContainer } from "./FormContainer";
import { ImageExport } from "./ImageExport";
import { useState } from "react";

import "../styles/Pixie.css";

export function Pixie() {
  const [image, setImage] = useState(null);
  const [cropperToggled, setCropperToggled] = useState(false);
  const [finalImage, setFinalImage] = useState(null);

  const handleImageUpload = (imageData) => {
    setImage(imageData);
  };

  const handleImageUpdate = (updatedImage) => {
    setImage(updatedImage);
  };

  let filename;

  return (
    <div id="Pixie">
      <ImageContainer
        id="ImageContainer"
        image={image}
        cropperToggled={cropperToggled}
        onImageUpload={handleImageUpload}
        setFinalImage={setFinalImage}
      />
      <FormContainer
        id="FormContainer"
        image={image}
        cropperToggled={cropperToggled}
        setCropperToggled={setCropperToggled}
        onImageUpdate={handleImageUpdate}
      />
      <ImageExport id="ImageExport" image={finalImage} filename={filename} />
    </div>
  );
}
