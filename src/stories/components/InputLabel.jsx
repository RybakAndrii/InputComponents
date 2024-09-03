import React from "react";
import PropTypes from "prop-types";
import "./InputComponents.css";

const InputLabel = ({ htmlFor, children, size }) => {
  return (
    <label htmlFor={htmlFor} className={`input-label ${size}`}>
      {children}
    </label>
  );
};

InputLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.string
};

export default InputLabel;
