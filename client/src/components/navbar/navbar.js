import styles from "../../css/nav.module.css";
import logo from "../../assets/icons/logo.png";

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.auth}>
        <button className={styles.login}>Login</button>
        <button className={styles.register}>Register</button>
      </div>
    </div>
  );
}
