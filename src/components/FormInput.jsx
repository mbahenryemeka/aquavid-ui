import React from "react";
import "./FormInput.css"

function FormInput({ placeholder, type, value, onChange, name }) {
  return (
    <div>
      <input 
        className="form-input" 
        placeholder={placeholder} 
        type={type} 
        value={value} 
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default FormInput;
