import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import { updateNewPostText } from './../../state/state';

const Profile = (props) => {
  return (
    <section className={styles.profile}>
      <ProfileInfo />
      <Posts posts={props.state.posts} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText} />
    </section>
  );
}

export default Profile;