import React from "react";
import "./FormInput.css"

function FormInput({ placeholder, type, value, onChange }) {
  return (
    <div>
      <input 
        className="form-input" 
        placeholder={placeholder} 
        type={type} 
        value={value} 
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
