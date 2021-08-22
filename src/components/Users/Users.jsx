import React from "react";
import styles from "./Users.module.css";
import avatar from "./../../assets/images/avatar.jpg";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={styles.pagination}>
        {pages.map((p, i) => {
          return (
            <button
              key={i}
              className={props.currentPage === p && styles.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </button>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={styles.user}>
          <div>
            <NavLink to={`/profile/${u.id}`}>
              <img
                src={u.photos.small ? u.photos.small : avatar}
                alt="avatar img"
                className={styles.userPhoto}
              />
            </NavLink>
            <br />
            {u.followed
              ? <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => props.unfollow(u.id)}
              >Unfollow</button>
              : <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => props.follow(u.id)}
              >Follow</button>
            }
          </div>
          <div className={styles.userInfo}>
            <div>
              <span>{u.name}</span>
              <br />
              <span>{u.status}</span>
            </div>
            <div>
              <span>{"u.location.country"}</span>
              <br />
              <span>{"u.location.city"}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
