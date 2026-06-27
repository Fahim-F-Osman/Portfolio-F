import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme, Palette } from "./themeTypes";

const THEME_KEY = "theme";
const PALETTE_KEY = "palette";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = localStorage.getItem(THEME_KEY) as Theme | null;
    return stored || "light";
  });

  const [palette, setPaletteState] = useState<Palette>(() => {
    return localStorage.getItem(PALETTE_KEY) || "";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute("data-theme", theme);
    root.setAttribute("data-palette", palette);

    localStorage.setItem(THEME_KEY, theme);
    localStorage.setItem(PALETTE_KEY, palette);
  }, [theme, palette]);

  const setTheme = (t: Theme) => setThemeState(t);
  const setPalette = (p: Palette) => setPaletteState(p);

  const toggleTheme = () =>
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider
      value={{
        theme,
        palette,
        setTheme,
        setPalette,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}