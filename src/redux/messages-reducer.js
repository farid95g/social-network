const SEND_MESSAGE = "SEND-MESSAGE";

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
  ]
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, message: body }
        ]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default messagesReducer;