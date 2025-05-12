"use client";

import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import styles from "../page.module.css";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <ThemeToggle />
      <a
        href="mailto:goodfriendsgallery@gmail.com"
        className={`${styles.comingSoon} ${styles.contactEmail}`}
        style={{ textDecoration: "underline", cursor: "pointer" }}
      >
        goodfriendsgallery@gmail.com
      </a>
    </div>
  );
} 