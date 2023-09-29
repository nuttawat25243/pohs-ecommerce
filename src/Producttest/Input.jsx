const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="flex cursor-pointer hover:underline">
      <input className="appearance-none" onChange={handleChange} type="radio" value={value} name={name} />
      <span className="" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;