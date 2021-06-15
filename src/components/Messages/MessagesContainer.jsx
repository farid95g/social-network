import React from "react";
import Messages from "./Messages";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/messages-reducer";
import StoreContext from "./../../StoreContext";

const MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().messagesPage;

        const onNewMessageChange = (body) => {
          let action = updateNewMessageBodyCreator(body);
          store.dispatch(action);
        };

        const onSendMessage = () => {
          store.dispatch(sendMessageCreator());
        };

        return (
          <Messages
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessage}
            state={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
