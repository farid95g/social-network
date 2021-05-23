import React from "react";
import styles from "./Messages.module.css";
import Message from './Message/Message';
import Sender from "./Sender/Sender";

const Messages = (props) => {
  const senders = props.state.senders
    .map(s => <Sender key={s.id} id={s.id} name={s.name} />);
  const messages = props.state.messages
    .map(m => <Message key={m.id} id={m.id} message={m.message} />);

  return (
    <section className={styles.messages}>
      <div className={styles.messageSenders}>
        <ul>
          { senders }
        </ul>
      </div>
      <div className={styles.messagesBlock}>
        { messages }
      </div>
    </section>
  );
};

export default Messages;
