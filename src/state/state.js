let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello. How are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "Bla bla", likesCount: 54 },
        { id: 4, message: "Ok, anyway", likesCount: 6 }
      ],
      newPostText: ''
    },
    messagesPage: {
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
      newMessageText: ''
    }
  },
  _callSubscriber() {
    console.log('State has been changed!');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: this._state.messagesPage.messages.length + 1,
        message: this._state.messagesPage.newMessageText
      };
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-MESSAGE-TEXT") {
      this._state.messagesPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  }
};

export default store;