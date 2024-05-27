export function Input({ type, label, id, defaultChecked, onChange }) {
    return (
    <label className="Input">{label}
        {type === "checkbox" ? (
            <input type={type} id={id} defaultChecked={defaultChecked} onChange={onChange} />
        ) : (
        <input type={type} />
      )}
    </label>
    )
}