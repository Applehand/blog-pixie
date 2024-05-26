import { Input}  from "../components/Input"

export function InputsContainer() {


    const handleSubmit = (event) => {
        event.preventDefault();
      }

    
    return (
        <form onSubmit={handleSubmit}>
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
            <div>
                <Input type="checkbox" label="Crop Toggle" />
            </div>
            <label>CROP
                <ul>
                    <li>
                        <Input type="number" label="Height:"/>
                    </li>
                    <li>
                        <Input type="number" label="Width:"/>
                    </li>
                    <li>
                        <Input type="number" label="posX:"/>
                    </li>
                    <li>
                        <Input type="number" label="posY:"/>
                    </li>
                </ul>
            </label>
            <div>
                <Input type="text" label="Filename:"/>
            </div>

        <input type="submit" />

        </form>
    )
  }