import React from "react";
import PropTypes from "prop-types";
import InputText from "./InputText";
import InputLabel from "./InputLabel";
import InputAnnotation from "./InputAnnotation";
import { FaExclamationCircle } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import "./InputComponents.css";

const InputGroup = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  state,
  size,
  annotationText,
}) => {
  const getClassNames = (state) => {
    switch (state) {
      case "hover":
        return "input-hover";
      case "focus":
        return "input-focus";
      case "error":
        return "input-error";
      case "error-focus":
        return "input-error-focus";
      default:
        return "";
    }
  };

  return (
    <div className={`input-group ${getClassNames(state)}`}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputText
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        size={size}
      />
      {getSelection(state) && (
        <span className="input-icon">{<BsQuestionCircle />}</span>
      )}
      {state === "error" && (
        <InputAnnotation>{annotationText || "Email"}</InputAnnotation>
      )}
      {state === "error" && <FaExclamationCircle />}{" "}
    </div>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  state: PropTypes.oneOf([
    "default",
    "hover",
    "focus",
    "error",
    "error-focus",
    "disabled",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  annotationText: PropTypes.string,
};

export default InputGroup;
