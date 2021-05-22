import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div>
        <img src="https://freesvg.org/img/Male-Avatar.png" alt="profile img" />
        <span>{ props.message }</span>
      </div>
      <span>likes { props.likesCount }</span>
    </div>
  );
};

export default Post;
