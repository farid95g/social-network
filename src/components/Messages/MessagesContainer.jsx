import Messages from "./Messages";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/messages-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    state: state.messagesPage,
    isAuth: state.auth.isAuth
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      let action = updateNewMessageBodyCreator(body);
      dispatch(action);
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
