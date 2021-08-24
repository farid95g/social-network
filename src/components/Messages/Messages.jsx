import React from "react";
import styles from "./Messages.module.css";
import Message from './Message/Message';
import Sender from "./Sender/Sender";

const Messages = (props) => {
  const senders = props.state.senders
    .map(s => <Sender key={s.id} id={s.id} name={s.name} />);
  const messages = props.state.messages
    .map(m => <Message key={m.id} id={m.id} message={m.message} />);

  const onNewMessageChange = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  const onSendMessage = () => {
    props.sendMessage();
  }

  return (
    <section className={styles.messages}>
      <div className={styles.messageSenders}>
        <ul>
          { senders }
        </ul>
      </div>
      <div className={styles.messagesBlock}>
        { messages }
        <div className={styles.newMessage}>
          <textarea
            onChange={onNewMessageChange}
            value={props.state.newMessageBody}
            placeholder="Enter your message"
          ></textarea>
          <div>
            <button onClick={onSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
