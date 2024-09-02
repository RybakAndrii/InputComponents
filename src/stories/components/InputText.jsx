import React from "react";
import PropTypes from "prop-types";
import "./InputComponents.css";

export const InputText = ({
  value,
  onChange,
  placeholder,
  disabled,
  className,
  id,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`input-text ${className}`}
      id={id}
    />
  );
};

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default InputText;
