import pic from "../../assets/temp/profile.jpg";
import styles from "../../css/card.module.css";

export default function Book() {
  return (
    <div>
      <div className={styles.book}>
        <div className={styles.bookImg}>
          <img src={pic} alt="" />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.title}>
            <h1>Ye manYe manYe manYe manYe manYe man</h1>
          </div>
          <div className={styles.author}>
            <i>By yeman</i>
          </div>
          <div className={styles.price}>Rp.90.000</div>
        </div>
      </div>
    </div>
  );
}
