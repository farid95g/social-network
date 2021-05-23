import React from "react";
import styles from "./../Messages.module.css";
import { NavLink } from "react-router-dom";

const Sender = (props) => {
  let path = `/messages/${props.id}`;

  return (
    <li className={styles.sender + " " + styles.active}>
      <NavLink to={path} activeClassName={styles.active}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default Sender;
