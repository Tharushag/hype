import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import styles from "@/styles/navbar.module.scss";

function ThemeSwitch(props) {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleClick() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <li className={ `${styles['theme']} border` } onClick={ handleClick } >
      <div className={ `${styles['theme__switch']} theme__switch-color` }></div>
    </li>
  );
}

export default ThemeSwitch;
