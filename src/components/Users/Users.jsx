import styles from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
        followed: false,
        fullName: "Dmitriy",
        status: "I am a boss...",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg",
        followed: true,
        fullName: "Sasha",
        status: "I am a boss too...",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/112139693/original/b70fa216317d4f9409230471e9727aeb624afe74/draw-minimalist-flat-line-art-avatar-in-vector-of-you.jpg",
        followed: false,
        fullName: "Andrew",
        status: "I am a boss too...",
        location: { city: "Kiev", country: "Ukrainer" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={styles.user}>
          <div>
            <img
              src={u.photoUrl}
              alt="avatar img"
              className={styles.userPhoto}
            />
            <br />
            {u.followed ? (
              <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.id)}>Follow</button>
            )}
          </div>
          <div className={styles.userInfo}>
            <div>
              <span>{u.fullName}</span>
              <br />
              <span>{u.status}</span>
            </div>
            <div>
              <span>{u.location.country}</span>
              <br />
              <span>{u.location.city}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;