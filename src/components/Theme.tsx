import { useState } from "react";
import "./styles/theme.scss";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ToggleSwitch = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
      setIsDark(!isDark);
      document.body.classList.toggle("dark-mode", !isDark);
    };
  
    return (
        <div className={`toggle-container ${isDark ? "dark" : "light"}`} onClick={toggleTheme}>
        <div className="toggle-circle">
          {isDark ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
      </div>
      
  );
};

export default ToggleSwitch;
