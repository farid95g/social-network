import React from "react";
import styles from "./Messages.module.css";
import { NavLink } from "react-router-dom";
import Message from './Message/Message';
import Sender from "./Sender/Sender";

const Messages = () => {
  return (
    <section className={styles.messages}>
      <div className={styles.messageSenders}>
        <ul>
          <Sender id="1" name="Albert Einstein" />
          <Sender id="2" name="Nikola Tesla" />
          <Sender id="3" name="Marie Curie" />
          <Sender id="4" name="Stephen Hawking" />
          <Sender id="5" name="Neil De Grass Tyson" />
          <Sender id="6" name="Richard Feynman" />
        </ul>
      </div>
      <div className={styles.messagesBlock}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Fine, thanks, and you?" />
        <Message message="Ok" />
        <Message message="No problem" />
      </div>
    </section>
  );
};

export default Messages;
