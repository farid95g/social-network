import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';

const Profile = (props) => {
  return (
    <section className={styles.profile}>
      <ProfileInfo />
      <Posts posts={props.state.posts} />
    </section>
  );
}

export default Profile;