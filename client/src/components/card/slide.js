import styles from "../../css/card.module.css";
import pic from "../../assets/temp/profile.jpg";

export default function Slide() {
  return (
    <div className={styles.container}>
      <div className={styles.slideCard}>
        <div className={styles.left}>
          <img src={pic}></img>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h4>Sebuah seni untuk bersikap bodoamt</h4>
          </div>
          <div className={styles.author}>
            <i>By Rizky Alvie</i>
          </div>
          <div className={styles.desc}>
            <p>
              test test test test test test test test test test test test test
              test test test test test
            </p>
          </div>
          <div className={styles.price}>
            <p>Rp.60.000</p>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
