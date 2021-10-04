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
            <div>
              <span>{props.login}</span>
              <button
                onClick={props.logout}
                style={{ color: "#fff", fontSize: "1rem", border: "1px solid #fff", padding: "5px 10px", marginRight: "1rem" }}
              >Logout</button>
            </div>
            :
            <NavLink to={"/login"}>Login</NavLink>
        }
      </div>
    </header>
  );
}

export default Header;