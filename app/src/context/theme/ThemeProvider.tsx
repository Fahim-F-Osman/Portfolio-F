import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme, Palette } from "./themeTypes";

const THEME_KEY = "theme";
const PALETTE_KEY = "palette";

const DEFAULT_THEME: Theme = "light";
const DEFAULT_PALETTE: Palette = "default";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem(THEME_KEY) as Theme) || DEFAULT_THEME;
  });

  const [palette, setPaletteState] = useState<Palette>(() => {
    return (localStorage.getItem(PALETTE_KEY) as Palette) || DEFAULT_PALETTE;
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