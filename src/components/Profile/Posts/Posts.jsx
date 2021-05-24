import React from "react";
import styles from "./Posts.module.css";
import Post from './Post/Post';

const Posts = (props) => {
  const posts = props.posts
    .map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />);

  let newPost = React.createRef();
  const addNewPost = () => {
    let post = newPost.current.value;
    console.log(post);
  }
  
  return (
    <div className={styles.posts}>
      <h3>My Posts</h3>
      <div className={styles.newPost}>
        <textarea ref={newPost}></textarea>
        <div>
          <button className={styles.btnAdd} onClick={addNewPost}>Add post</button>
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