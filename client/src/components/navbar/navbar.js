import styles from "../../css/nav.module.css";
import logo from "../../assets/icons/logo.png";

export default function Navbar({setLogin, setRegister}) {

  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.auth}>
        <button onClick={() => setLogin(true)} className={styles.login}>Login</button>
        <button onClick={() => setRegister(true)} className={styles.register}>Register</button>
      </div>
    </div>
  );
}
