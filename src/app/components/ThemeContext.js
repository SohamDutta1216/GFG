"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isInverted) {
      root.style.setProperty("--background", "#db4a2b");
      root.style.setProperty("--foreground", "#000");
      root.style.setProperty("--accent", "#e4e2dd");
      root.style.setProperty("--accent-invert", "#db4a2b");
    } else {
      root.style.setProperty("--background", "#e4e2dd");
      root.style.setProperty("--foreground", "#171717");
      root.style.setProperty("--accent", "#db4a2b");
      root.style.setProperty("--accent-invert", "#e4e2dd");
    }
  }, [isInverted]);

  return (
    <ThemeContext.Provider value={{ isInverted, setIsInverted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 