// .storybook/preview.js
import { ThemeProvider, useTheme } from "../src/ThemeContext"; // Adjust the path based on your project structure

export const storybookDecorator = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

// Optional: Add a toolbar item for toggling the theme
import { useEffect } from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
};

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const btn = document.createElement("button");
    btn.innerText = darkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
    btn.style.position = "fixed";
    btn.style.top = "10px";
    btn.style.right = "10px";
    btn.onclick = toggleDarkMode;
    document.body.appendChild(btn);

    return () => {
      document.body.removeChild(btn);
    };
  }, [darkMode, toggleDarkMode]);

  return null;
};

export const storybookDecorators = [
  (Story) => (
    <ThemeProvider>
      <ThemeToggle />
      <Story />
    </ThemeProvider>
  ),
];
