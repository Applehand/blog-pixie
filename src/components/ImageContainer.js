import { useState } from "react";
import { Cropper } from "./Cropper";
import { Resizer } from "./Resizer";

import '../styles/ImageContainer.css';


export function ImageContainer() {
    const [image, setImage] = useState(null)

    const handleFileChange = (e) => {
      const file = e.target.files[0]
      handleImageUpload(file)
    }

    const handleImageUpload = async (file) => {
        const img = new Image();
        img.onload = () => setImage(img);
        img.src = URL.createObjectURL(file);
        console.log(img)
    };
  
    let resizerComponent;
    if (image) {
      resizerComponent = <Resizer image={image} newHeight={image.height} newWidth={image.width} />;
    }

    return (
        <div id="image-container">
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {resizerComponent}
            <Cropper image={image}/>
        </div>
    )
  }
  