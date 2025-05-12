"use client";

import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import styles from "../page.module.css";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <ThemeToggle />
      <div className={styles.comingSoon}>COMING SOON...</div>
      <div style={{ height: 'calc(100vh - 80px)' }}></div>
    </div>
  );
} 