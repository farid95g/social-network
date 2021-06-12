import React from "react";
import styles from "./Posts.module.css";
import Post from './Post/Post';

const Posts = (props) => {
  const posts = props.posts
    .map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />);

  const onPostChange = e => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  const onAddPost = () => {
    props.addPost();
  }
  
  return (
    <div className={styles.posts}>
      <h3>My Posts</h3>
      <div className={styles.newPost}>
        <textarea onChange={onPostChange} value={props.newPostText}></textarea>
        <div>
          <button className={styles.btnAdd} onClick={onAddPost}>Add post</button>
          <button className={styles.btnRemove}>Remove post</button>
        </div>
      </div>
      <div className={styles.postsWrapper}>
        { posts }
      </div>
    </div>
  );
}

export default Posts;