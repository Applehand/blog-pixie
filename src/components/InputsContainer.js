import { Input}  from "../components/Input"

export function InputsContainer({ cropperToggled, setCropperToggled }) {
    const handleCropToggleChange = (e) => {
        console.log('Received value:', e.target.checked);
        setCropperToggled(e.target.checked);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
      }

    
    return (
        <form onSubmit={handleSubmit}>
            <div id="resize-container">
            <label>RESIZE
                <ul>
                    <li>
                        <Input type="number" label="Height:"/>
                    </li>
                    <li>
                        <Input type="number" label="Width:"/>
                    </li>
                    <li>
                        <Input type="number" label="Aspect:"/>
                    </li>
                </ul>
            </label>
            </div>

            <div id="crop-container">
            <label>CROP
                <div>
                    <Input type="checkbox" id="crop-toggle" label="Crop Toggle" defaultChecked={cropperToggled} onChange={handleCropToggleChange} />
                </div>
            
                <ul>
                    <li>
                        <Input type="number" label="Height:"/>
                    </li>
                    <li>
                        <Input type="number" label="Width:"/>
                    </li>
                </ul>
            </label>
            </div>
            <div>
                <Input type="text" label="Filename:"/>
            </div>

        <input type="submit" />

        </form>
    )
  }