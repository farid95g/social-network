import React from "react";
import Messages from './Messages';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messages-reducer';

const MessagesContainer = (props) => {
  const state = props.store.getState().messagesPage;

  const onNewMessageChange = body => {
    let action = updateNewMessageBodyCreator(body);
    props.store.dispatch(action);
  }

  const onSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }

  return <Messages
    updateNewMessageBody={onNewMessageChange}
    sendMessage={onSendMessage}
    state={state}
  />;
};

export default MessagesContainer;
