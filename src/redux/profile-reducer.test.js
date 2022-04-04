import profileReducer from "./profile-reducer";
import { addPostActionCreator, deletePost } from "./profile-reducer";

const state = {
  posts: [
    { id: 1, message: "Hello. How are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Bla bla", likesCount: 54 },
    { id: 4, message: "Ok, anyway", likesCount: 6 }
  ]
};

test('length of posts should be incremented', () => {
  let action = addPostActionCreator("it-kamasutra.com");
  
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
  let action = addPostActionCreator("it-kamasutra.com");

  let newState = profileReducer(state, action);

  expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

test('after deleting length of messages should be decremented', () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});


test(`after deleting length shouldn't be decremented if id is incorrect`, () => {
  let action = deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});