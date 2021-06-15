import React from "react";
import Posts from "./Posts";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "./../../../StoreContext";

const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        const onAddPost = () => {
          store.dispatch(addPostActionCreator());
        };
        
        return (
          <Posts
            updateNewPostText={onPostChange}
            addPost={onAddPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
