import * as axios from "axios";
import styles from "./Users.module.css";
import avatar from "./../../assets/images/avatar.jpg";
import React from "react";

class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className={styles.pagination}>
          {
            pages.map(p => {
              return (
                <button
                  className={this.props.currentPage === p && styles.selectedPage}
                  onClick={() => { this.onPageChanged(p); }}
                >{p}</button>
              )
            })
          }
        </div>
        {this.props.users.map((u) => (
          <div key={u.id} className={styles.user}>
            <div>
              <img
                src={u.photos.small ? u.photos.small : avatar}
                alt="avatar img"
                className={styles.userPhoto}
              />
              <br />
              {u.followed ? (
                <button onClick={() => this.props.unfollow(u.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
  }
}

export default Users;
