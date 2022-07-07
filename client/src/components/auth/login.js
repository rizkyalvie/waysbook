import styles from "../../css/auth.module.css";

export default function Login({ setLogin, setRegister }) {
  return (
    <div className={styles.logAnimation}>
      <button onClick={() => setLogin()} className={styles.logModal}></button>
      <div className={styles.login}>
        <h1 className={styles.logTitle}>Login</h1>
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </form>
        <button className={styles.logButton}>Login</button>
        <p>
          Don't have an account? click <button onClick={() => setRegister(true)} className={styles.chBtn} >here</button>
        </p>
      </div>
    </div>
  );
}
