import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
  return (
    <section className={styles.profile}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <PostsContainer />
    </section>
  );
}

export default Profile;