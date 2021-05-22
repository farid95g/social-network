import React from "react";
import styles from "./Posts.module.css";
import Post from './Post/Post';

const Posts = () => {
  return (
    <div className={styles.posts}>
      <h3>My Posts</h3>
      <div className={styles.newPost}>
        <textarea></textarea>
        <div>
          <button className={styles.btnAdd}>Add post</button>
          <button className={styles.btnRemove}>Remove post</button>
        </div>
      </div>
      <div className={styles.postsWrapper}>
        <Post message="Hello. How are you?" likesCount="12" />
        <Post message="It's my first post" likesCount="11" />
        <Post message="Bla bla" likesCount="54" />
        <Post message="Ok, anyway" likesCount="6" />
      </div>
    </div>
  );
}

export default Posts;