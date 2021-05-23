import React from "react";
import styles from "./../Messages.module.css";

const Message = (props) => {
  return (
    <div className={styles.message}>
      <span>{ props.message }</span>
    </div>
  );
};

export default Message;
