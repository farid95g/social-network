import React from "react";
import styles from "./Post.module.css";
import { FaThumbsUp } from "react-icons/fa";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div>
        <img src="https://freesvg.org/img/Male-Avatar.png" alt="profile img" />
        <div>
          <span>{ props.message }</span><br />
          <span className={styles.like}>
            <FaThumbsUp />
            <span>{props.likesCount}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
