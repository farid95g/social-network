import React from "react";
import styles from "./Users.module.css";
import avatar from "./../../assets/images/avatar.jpg";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { followAPI } from "../../api/api";

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
            {u.followed ?
              (
                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={
                  () => {
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "7af8cf62-29c6-4ae5-8d77-ed8358a66d04"
                        }
                      })
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }
                }>Unfollow</button>
              ) : (
                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={
                  () => {
                    props.toggleFollowingProgress(true, u.id);
                    followAPI.follow(u.id)
                      .then(data => {
                        if (data.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(true, u.id);
                      });
                  }
                }>Follow</button>
            )}
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
