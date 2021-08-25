import Messages from "./Messages";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/messages-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    state: state.messagesPage
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);