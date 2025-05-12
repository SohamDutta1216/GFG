"use client";

import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { isInverted } = useTheme();
  return (
    <nav className={styles.navbar}>
      <Link href="/home" className={styles.logoContainer}>
        <Image src={isInverted ? "/gfg_logo2.png" : "/gfg_logo.png"} alt="Logo" width={260} height={260} priority />
      </Link>
      <div className={styles.navButtons}>
        <Link href="/about" className={styles.navButton}>About</Link>
        <Link href="/submit" className={styles.navButton}>Submit</Link>
        <Link href="/contact" className={styles.navButton}>Contact</Link>
      </div>
    </nav>
  );
} 