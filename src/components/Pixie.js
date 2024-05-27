import { ImageContainer } from "./ImageContainer";
import { InputsContainer } from "./InputsContainer";
import { ImageExport } from "./ImageExport";
import { useState } from "react";

import '../styles/Pixie.css';


export function Pixie() {
    const [image, setImage] = useState(null)
    const [cropperToggled, setCropperToggled] = useState(false)

    const handleImageUpload = (imageData) => {
        setImage(imageData)
    }

    return (
        <div id="Pixie">
            <ImageContainer id="ImageContainer" image={image} cropperToggled={cropperToggled} onImageUpload={handleImageUpload}/>
            <InputsContainer id="InputsContainer" cropperToggled={cropperToggled} setCropperToggled={setCropperToggled}/>
            <ImageExport id="ImageExport"/>
        </div>
    )
  }
  