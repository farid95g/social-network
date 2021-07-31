import React from "react";
import styles from "./Header.module.css";
import logo from "./../../logo.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="company logo" />

      <div className={styles.loginBlock}>
        {
          props.isAuth
            ?
            <span>{props.login}</span>
            :
            <NavLink to={"/login"}>Login</NavLink>
        }
      </div>
    </header>
  );
}

export default Header;