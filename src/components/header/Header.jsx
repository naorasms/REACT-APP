import React from "react";
import Navbar from "./Navbar";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">Logo</a>
      <Navbar />
    </header>
  );
};

export default Header;
