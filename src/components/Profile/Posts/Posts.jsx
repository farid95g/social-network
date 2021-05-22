import React from "react";
import styles from "./Posts.module.css";

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
        <div className={styles.post}>
          <img src="https://freesvg.org/img/Male-Avatar.png" alt="profile img" />
          <span>Hello. How are you?</span>
        </div>
        <span>likes 12</span>

        <div className={styles.post}>
          <img src="https://freesvg.org/img/Male-Avatar.png" alt="profile img" />
          <span>It's my first post</span>
        </div>
        <span>likes 11</span>

        <div className={styles.post}>
          <img src="https://freesvg.org/img/Male-Avatar.png" alt="profile img" />
          <span>Bla bla</span>
        </div>
        <span>likes 54</span>

        <div className={styles.post}>
          <img src="https://freesvg.org/img/Male-Avatar.png" alt="profile img" />
          <span>Ok, anyway</span>
        </div>
        <span>likes 6</span>
      </div>
    </div>
  );
}

export default Posts;