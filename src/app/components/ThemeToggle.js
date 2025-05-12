"use client";

import { useTheme } from "./ThemeContext";
import styles from "../page.module.css";

export default function ThemeToggle() {
  const { isInverted, setIsInverted } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      aria-label="Toggle theme"
      onClick={() => setIsInverted((v) => !v)}
      style={{
        background: `var(--accent)`,
        borderColor: `var(--background)`,
        color: `var(--background)`
      }}
    />
  );
} 