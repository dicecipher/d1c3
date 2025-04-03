import { useEffect, useState } from "react";
import "./styles/theme.scss";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleSwitch = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className={`toggle-container ${isDark ? "dark" : "light"}`} onClick={toggleTheme}>
      <div className="toggle-circle">
        {isDark ? <DarkModeIcon /> : <LightModeIcon />}
      </div>
    </div>
  );
};

export default ToggleSwitch;
