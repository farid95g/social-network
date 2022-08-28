import React from "react";
import styles from "./Users.module.css";
import avatar from "./../../assets/images/avatar.jpg";
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={styles.user}>
      <div>
        <NavLink to={`/profile/${user.id}`}>
          <img
            src={user.photos.small ? user.photos.small : avatar}
            alt="avatar img"
            className={styles.userPhoto}
          />
        </NavLink>
        <br />
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => unfollow(user.id)}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => follow(user.id)}
          >
            Follow
          </button>
        )}
      </div>
      <div className={styles.userInfo}>
        <div>
          <span>{user.name}</span>
          <br />
          <span>{user.status}</span>
        </div>
        <div>
          <span>{"user.location.country"}</span>
          <br />
          <span>{"user.location.city"}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
