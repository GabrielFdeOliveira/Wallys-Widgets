import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarHome}>
        <Link href="/">
          <p>Home</p>
        </Link>
      </div>
      <div className={styles.navbarAbout}>
        <Link href="/about">
          <p>About</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
