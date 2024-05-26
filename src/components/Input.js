export function Input({type, label}) {
    return (
    <label className="Input"> {label}
        <input type={type}></input>
    </label>
        )
  }