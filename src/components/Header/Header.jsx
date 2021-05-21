import React from "react";
import styles from "./Header.module.css";
import logo from "./../../logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="company logo" />
    </header>
  );
}

export default Header;