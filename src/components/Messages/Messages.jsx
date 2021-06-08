import React from "react";
import styles from "./Messages.module.css";
import Message from './Message/Message';
import Sender from "./Sender/Sender";
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../state/messages-reducer';

const Messages = (props) => {
  let state = props.store.getState().messagesPage;

  const senders = state.senders
    .map(s => <Sender key={s.id} id={s.id} name={s.name} />);
  const messages = state.messages
    .map(m => <Message key={m.id} id={m.id} message={m.message} />);
  
  const newMessageBody = state.newMessageBody;

  const onNewMessageChange = e => {
    let body = e.target.value;
    let action = updateNewMessageBodyCreator(body);
    props.store.dispatch(action);
  }

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
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
          <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"></textarea>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
