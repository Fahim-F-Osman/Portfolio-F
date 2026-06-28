import {
  FaSun,
  FaCloudMoonRain,
  FaPalette,
  FaShareAlt
} from "react-icons/fa";
import styles from "./UtilityMenu.module.css"
import { useTheme } from "@/context/theme/useTheme";
import UtilityModal from "@/components/UtilityMenu/UtilityModal/UtilityModal"
import { useState, useRef } from "react";
import PaletteModal from "./PaletteModal/PaletteModal";

export default function UtilityMenu() {
  const { theme, toggleTheme } = useTheme();
  
  const [openPalette, setOpenPalette] = useState(true);
  const [openContact, setOpenContact] = useState(false);
  const themeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
    <div className={styles.container}>
      <button
        ref={themeButtonRef}
        className={`${styles.toggle} ${styles.utilityButton}`}
        onClick={toggleTheme}
      >
        {theme === "light" ? <FaSun /> : <FaCloudMoonRain />}
      </button>

      <button 
        className={`${styles.contactsButton} ${styles.utilityButton}`} 
        onClick={() => setOpenContact(true)}
      >
        <FaShareAlt />
      </button>
      
      <button
        className={`${styles.paletteButton} ${styles.utilityButton}`}
        onClick={() => setOpenPalette((prev) => !prev)}
      >
        <FaPalette />
      </button>  
    </div>

    <PaletteModal
        open={openPalette}
        onClose={() => setOpenPalette(false)}
        excludeRef={themeButtonRef}
      />

    <UtilityModal
      open={openContact}
      onClose={() => setOpenContact(false)}
      title="Contacts">
    </UtilityModal>
    </>
  )
}