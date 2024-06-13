import React from "react";
import "./Input.scss";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
