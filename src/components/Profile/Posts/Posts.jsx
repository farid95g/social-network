import React from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "./../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const Posts = (props) => {
  const posts = props.posts.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const onAddPost = (post) => {
    props.addPost(post.newPostText);
  };

  return (
    <div className={styles.posts}>
      <h3>My Posts</h3>
      <div className={styles.newPost}>
        <AddPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={styles.postsWrapper}>{posts}</div>
    </div>
  );
};

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name="newPostText"
        placeholder="Add new post"
        validate={[ required, maxLength10 ]}
      />
      <div>
        <button className={styles.btnAdd} type="submit">
          Add post
        </button>
        <button className={styles.btnRemove}>Remove post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "addPostForm" })(AddPostForm);

export default Posts;
