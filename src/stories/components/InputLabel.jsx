import React from "react";
import "./InputComponents.css";

const InputLabel = ({ htmlFor, children, size }) => {
  return (
    <label htmlFor={htmlFor} className={`input-label ${size}`}>
      {children}
    </label>
  );
};

export default InputLabel;
