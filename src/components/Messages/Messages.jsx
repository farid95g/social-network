import React from "react";
import styles from "./Messages.module.css";
import { NavLink } from "react-router-dom";

const Messages = () => {
  return (
    <section className={styles.messages}>
      <div className={styles.messageSenders}>
        <ul>
          <li className={styles.sender + " " + styles.active}>
            <NavLink activeClassName={styles.active} to="/messages/1">
              Albert Einstein
            </NavLink>
          </li>
          <li className={styles.sender + " " + styles.active}>
            <NavLink activeClassName={styles.active} to="/messages/2">
              Nikola Tesla
            </NavLink>
          </li>
          <li className={styles.sender + " " + styles.active}>
            <NavLink activeClassName={styles.active} to="/messages/3">
              Marie Curie
            </NavLink>
          </li>
          <li className={styles.sender + " " + styles.active}>
            <NavLink activeClassName={styles.active} to="/messages/4">
              Stephen Hawking
            </NavLink>
          </li>
          <li className={styles.sender + " " + styles.active}>
            <NavLink activeClassName={styles.active} to="/messages/5">
              Neil De Grass Tyson
            </NavLink>
          </li>
          <li className={styles.sender + " " + styles.active}>
            <NavLink activeClassName={styles.active} to="/messages/6">
              Richard Feynman
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.messagesBlock}>
        <div className={styles.message}>
          <span>Hi</span>
        </div>
        <div className={styles.message}>
          <span>How are you?</span>
        </div>
        <div className={styles.message}>
          <span>Fine, thanks, and you?</span>
        </div>
        <div className={styles.message}>
          <span>Ok</span>
        </div>
        <div className={styles.message}>
          <span>No problem</span>
        </div>
      </div>
    </section>
  );
};

export default Messages;
