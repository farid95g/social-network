import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div className={styles.profileInfo}>
      <img
        src="https://wallpaperaccess.com/full/3949076.jpg"
        alt="cover img"
      />
      <div>
        <img src={props.profile.photos.large} alt="profile img" />
      </div>
    </div>
  );
}

export default ProfileInfo;