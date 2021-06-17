const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  senders: [
    { id: 1, name: "Albert Einstein" },
    { id: 2, name: "Nikola Tesla" },
    { id: 3, name: "Marie Curie" },
    { id: 4, name: "Stephen Hawking" },
    { id: 5, name: "Neil De Grass Tyson" },
    { id: 6, name: "Richard Feynman" }
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Fine, thanks, and you?" },
    { id: 4, message: "Ok" },
    { id: 5, message: "No problem" }
  ],
  newMessageBody: ''
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, message: body }
        ]
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => (
  { type: UPDATE_NEW_MESSAGE_BODY, body: body }
);

export default messagesReducer;