import { useData } from "@/context/data/useData";
import { useState, useEffect, useRef } from "react";
import styles from "./PaletteModal.module.css";
import { useTheme } from "@/context/theme/useTheme";
import type { Palette } from "@/context/theme/themeTypes";

interface PalettePanelProps {
  open: boolean;
  onClose: () => void;
  excludeRef?: React.RefObject<Element | null>;
}

export default function PaletteModal({ open, onClose, excludeRef }: PalettePanelProps) {
  const { palettes } = useData();
  const { palette, setPalette } = useTheme();

  const [activePaletteId, setActivePaletteId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (excludeRef?.current?.contains(e.target as Node)) return;
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose, excludeRef]);

  if (!open || !palettes?.length) return null;

  const currentPaletteId = activePaletteId ?? palette ?? palettes[0].id;

  const handleSelect = (id: string) => {
    setPalette(id as Palette);
    setActivePaletteId(id);
  };

  return (
    <div ref={ref} className={styles.container} role="dialog">
      <p className={styles.palLabel}>Choose palette</p>
      <div className={styles.paletteList}>
        {palettes.map(({ id, name }) => (
          <button
            key={id}
            type="button"
            className={`${styles.item} ${currentPaletteId === id ? styles.active : ""}`}
            onClick={() => handleSelect(id)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}