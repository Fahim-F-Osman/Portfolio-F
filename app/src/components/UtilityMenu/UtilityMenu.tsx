import {
  FaSun,
  FaCloudMoonRain,
  FaPalette,
  FaUserCircle,
} from "react-icons/fa";
import styles from "./UtilityMenu.module.css"
import { useTheme } from "@/context/theme/useTheme";

export default function UtilityMenu() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <button
        className={styles.toggle}
        onClick={toggleTheme}
      >
        {theme === "light" ? <FaSun /> : <FaCloudMoonRain />}
      </button>
      <button className={styles.contactsButton}><FaUserCircle /></button>
      <button><FaPalette /></button>
    </div>
  )
}

