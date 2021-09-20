import React from "react";
import styles from "./Messages.module.css";
import Message from "./Message/Message";
import Sender from "./Sender/Sender";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "./../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const Messages = (props) => {
  const senders = props.state.senders.map((s) => (
    <Sender key={s.id} id={s.id} name={s.name} />
  ));
  const messages = props.state.messages.map((m) => (
    <Message key={m.id} id={m.id} message={m.message} />
  ));

  const addNewMessage = (values) => props.sendMessage(values.newMessageBody);

  return (
    <section className={styles.messages}>
      <div className={styles.messageSenders}>
        <ul>{senders}</ul>
      </div>
      <div className={styles.messagesBlock}>
        {messages}
        <div className={styles.newMessage}>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </section>
  );
};

const AddMessageForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name="newMessageBody"
        placeholder="Enter your message"
        validate={[ required, maxLength50 ]}
      />
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "new-message" })(AddMessageForm);

export default Messages;
