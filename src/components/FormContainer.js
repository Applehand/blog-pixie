import { Input } from "./Input";

export function FormContainer({
  image,
  cropperToggled,
  setCropperToggled,
  onImageUpdate,
}) {
  const handleHeightChange = (e) => {
    const newHeight = e.target.value;
    const newAspectRatio = image.width / newHeight;
    onImageUpdate({ image, height: newHeight, aspectRatio: newAspectRatio });
  };

  const handleWidthChange = (e) => {
    const newWidth = e.target.value;
    const newAspectRatio = newWidth / image.height;
    onImageUpdate({ image, width: newWidth, aspectRatio: newAspectRatio });
  };

  const handleCropToggleChange = (e) => {
    setCropperToggled(e.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
                label="Height:"
                value={image ? image.height : ""}
                onChange={handleHeightChange}
              />
            </li>
            <li>
              <Input
                type="number"
                label="Width:"
                value={image ? image.width : ""}
                onChange={handleWidthChange}
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

      <input type="submit" />
    </form>
  );
}
