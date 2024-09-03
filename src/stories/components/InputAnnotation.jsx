import React from "react";
import PropTypes from "prop-types";
import "./InputComponents.css";

const InputAnnotation = ({ children }) => {
  return <small className="input-annotation">{children}</small>;
};

InputAnnotation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputAnnotation;
