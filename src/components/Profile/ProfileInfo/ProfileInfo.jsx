import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }
  
  return (
    <div className={styles.profileInfo}>
      <img
        src="https://wallpaperaccess.com/full/3949076.jpg"
        alt="cover img"
      />
      <div>
        <img src={profile.photos.large} alt="profile img" />
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
}

export default ProfileInfo;