import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InputText from "./InputText";
import InputLabel from "./InputLabel";
import InputAnnotation from "./InputAnnotation";
import { BsQuestionCircle } from "react-icons/bs";
import { FiSearch, FiInfo } from "react-icons/fi";
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
  const [previousInput, setPreviousInput] = useState(""); // Стан для збереження попереднього введення
  const [os, setOs] = useState(""); // Стан для визначення операційної системи

  useEffect(() => {
    // Визначаємо операційну систему користувача
    const platform = navigator.platform.toLowerCase();
    if (platform.includes("mac")) {
      setOs("macOS");
    } else if (platform.includes("win")) {
      setOs("Windows");
    } else if (platform.includes("linux")) {
      setOs("Linux");
    } else {
      setOs("Unknown OS");
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const isMac = os === "macOS";
      const isCtrlK = event.ctrlKey && event.key === "k";
      const isCmdK = event.metaKey && event.key === "k";

      if ((isMac && isCmdK) || (!isMac && isCtrlK)) {
        event.preventDefault();
        if (previousInput) {
          onChange({ target: { value: previousInput } }); // Вставляємо попереднє введення
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previousInput, onChange, os]);

  const handleInputChange = (e) => {
    setPreviousInput(value); // Зберігаємо поточне значення перед оновленням
    onChange(e); // Викликаємо функцію зміни значення з пропсів
  };

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

  // Функція для відображення тексту шорткату в залежності від ОС
  const getShortcutText = () => {
    if (os === "macOS") return "⌘K";
    if (os === "Windows" || os === "Linux") return "Ctrl+K";
    return "Ctrl/Cmd+K";
  };

  return (
    <div className={`input-group ${getClassNames(state)}`}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputText
        id={id}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        size={size}
      />
      {state === "disabled" && (
        <InputAnnotation>{annotationText}</InputAnnotation>
      )}
      {state === "hover" && (
        <InputAnnotation>{annotationText || "Email"}</InputAnnotation>
      )}
      {state === "error-focus" && (
        <InputAnnotation>{annotationText || "Email"}</InputAnnotation>
      )}
      {state === "focus" && (
        <InputAnnotation>{annotationText || "Email"}</InputAnnotation>
      )}

      {getSelection(state) && (
        <button className="input-question">{<BsQuestionCircle />}</button>
      )}
      {state === "error" && (
        <InputAnnotation>{annotationText || "Email"}</InputAnnotation>
      )}
      {getSelection(state) && <span className="input-info">{<FiInfo />} </span>}
      {getSelection(state) && (
        <button className="input-search">{<FiSearch />} </button>
      )}

      {/* Кнопка з шорткатом */}
      <button className="input-shortcut">{getShortcutText()}</button>
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
