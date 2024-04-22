import React from "react";

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="dropdownFilter">
      <label htmlFor={label}>{label}:</label>
      <select id={label} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
