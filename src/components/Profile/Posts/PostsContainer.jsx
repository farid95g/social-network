import React from "react";
import Posts from './Posts';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';

const PostsContainer = (props) => {
  const state = props.store.getState();

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  const onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }
  
  return <Posts
    updateNewPostText={onPostChange}
    addPost={onAddPost}
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText}
  />;
}

export default PostsContainer;