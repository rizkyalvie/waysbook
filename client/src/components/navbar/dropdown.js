import React from "react";
import styles from "../../css/nav.module.css";
import profile from "../../assets/navbar/profile.png";
import complain from "../../assets/navbar/complain.png";
import logout from "../../assets/navbar/logout.png";
import arrow from "../../assets/navbar/polygon.png";

export default function Dropdown() {
  return (
    <div>
      <div className={styles.dropCon}>
        <div className={styles.profile}>
          <img src={profile} />
          <p>Profile</p>
        </div>
        <div className={styles.complain}>
          <img src={complain} />
          <p>Complain</p>
        </div>
        <div className={styles.hLine}></div>
        <div className={styles.logout}>
          <img src={logout} />
          <p>Logout</p>
        </div>
        <img src={arrow} className={styles.arrow} />
      </div>
    </div>
  );
}
