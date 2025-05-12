"use client";

import Image from "next/image";
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <ThemeToggle />
      <div className={styles.container}>
        <h1 className={styles.goodFriends}>good friends</h1>
        <h2 className={styles.gallery}>GALLERY</h2>
        <button className={styles.enterButton} onClick={() => router.push('/home')}>ENTER</button>
      </div>
    </div>
  );
}
