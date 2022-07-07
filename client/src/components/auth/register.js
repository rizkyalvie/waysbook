import styles from "../../css/auth.module.css";

export default function Login({ setLogin, setRegister }) {
  return (
    <div className={styles.regAnimation}>
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
          Already have an account? click <button onClick={() => {setRegister && setRegister(false)}} className={styles.chBtn}>here</button>
        </p>
      </div>
    </div>
  );
}
