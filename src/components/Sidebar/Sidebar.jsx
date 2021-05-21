import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul>
          <li className={`${styles.item} ${styles.active}`}>
            <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/messages" activeClassName={styles.active}>Messages</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/options" activeClassName={styles.active}>Options</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;