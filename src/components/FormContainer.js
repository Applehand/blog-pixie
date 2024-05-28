import { Input } from "./Input";

export function FormContainer({
  image,
  cropperToggled,
  setCropperToggled,
  onImageUpdate,
  onCrop,
  setFinalImage,
}) {
  const handleInputChange = (e) => {
    const newValue = parseFloat(e.target.value);
    const isWidthInput =
      e.target.getAttribute("data-input") === "Resize Width:";

    const aspectRatio = image.width / image.height;
    const updatedImage = new Image();
    updatedImage.onload = () => {
      if (isWidthInput) {
        updatedImage.width = newValue;
        updatedImage.height = Math.round(newValue / aspectRatio);
      } else {
        updatedImage.width = Math.round(newValue * aspectRatio);
        updatedImage.height = newValue;
      }
      onImageUpdate(updatedImage);
    };
    updatedImage.src = image.src;
  };

  const handleCropToggleChange = (e) => {
    setCropperToggled(e.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCrop = () => {
    if (cropperToggled) {
      onCrop();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="resize-container">
        <label>
          RESIZE
          <ul>
            <li>
              <Input
                type="number"
                label="Resize Height:"
                value={image ? image.height : ""}
                onChange={handleInputChange}
              />
            </li>
            <li>
              <Input
                type="number"
                label="Resize Width:"
                value={image ? image.width : ""}
                onChange={handleInputChange}
              />
            </li>
            <li>
              <Input
                type="number"
                label="Aspect:"
                value={image ? (image.width / image.height).toFixed(2) : ""}
              />
            </li>
          </ul>
        </label>
      </div>

      <div id="crop-container">
        <label>
          CROP
          <div>
            <Input
              type="checkbox"
              id="crop-toggle"
              label="Crop Toggle"
              defaultChecked={cropperToggled}
              onChange={handleCropToggleChange}
            />
            <button type="button" onClick={handleCrop}>
              Crop Current Selection
            </button>
          </div>
          <ul>
            <li>
              <Input type="number" label="Height:" />
            </li>
            <li>
              <Input type="number" label="Width:" />
            </li>
          </ul>
        </label>
      </div>
      <div>
        <Input type="text" label="Filename:" />
      </div>

      <input type="submit" formMethod="post" onSubmit={setFinalImage} />
    </form>
  );
}
