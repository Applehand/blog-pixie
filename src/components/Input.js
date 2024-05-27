export function Input({ type, label, value, defaultChecked, onChange }) {
  return (
    <label className="Input">
      {label}
      {type === "checkbox" ? (
        <input
          type={type}
          value={value}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
      ) : (
        <input type={type} value={value} onChange={onChange} />
      )}
    </label>
  );
}
