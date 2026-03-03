import { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

/** Toggles light/dark theme. Persists choice in localStorage and sets data-theme on <html> for CSS. */
const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  /** Sync theme to DOM and localStorage whenever theme state changes. */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
