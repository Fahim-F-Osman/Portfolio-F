import {
  FaSun,
  FaCloudMoonRain,
  FaPalette,
  FaUserCircle,
} from "react-icons/fa";
import styles from "./UtilityMenu.module.css"
import { useState } from "react";

export default function UtilityMenu() {
  const [dark, setDark] = useState(false);
  return (
    <div className={styles.container}>
      <button
        className={styles.toggle}
        onClick={() => setDark(!dark)}
      >
        {dark ? <FaCloudMoonRain /> : <FaSun />}
      </button>
      <button className={styles.contactsButton}><FaUserCircle /></button>
      <button><FaPalette /></button>
    </div>
  )
}

