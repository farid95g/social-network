import { renderEntireTree } from "./../render";

const state = {
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
    ]
  }
};

window.state = state;

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
}

export const addPost = () => {
  let newPost = {
    id: state.profilePage.posts.length + 1,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export default state;