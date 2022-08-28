import React from "react";
import styles from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pages.map((p, i) => {
        return (
          <button
            key={i}
            className={currentPage === p && styles.selectedPage}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
};

export default Paginator;
