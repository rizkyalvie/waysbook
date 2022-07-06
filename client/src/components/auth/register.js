import styles from "../../css/auth.module.css";

export default function Login({ setRegister }) {
  return (
    <div>
      <button onClick={() => setRegister()} className={styles.logModal}></button>
      <div className={styles.register}>
        <h1 className={styles.logTitle}>Register</h1>
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Full Name" />
        </form>
        <button className={styles.logButton}>Login</button>
        <p>
          Don't have an account? click <a href="">here</a>
        </p>
      </div>
    </div>
  );
}
