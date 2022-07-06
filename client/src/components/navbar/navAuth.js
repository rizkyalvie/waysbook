import styles from "../../css/nav.module.css";
import logo from "../../assets/navbar/logo.png";
import profile from "../../assets/temp/profile.jpg";
import cart from "../../assets/navbar/cart.png";
import {Link} from 'react-router-dom'
import Dropdown from "./dropdown";

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.right}>
        <Link to='https://www.google.com'><img className={styles.cart} src={cart} alt="" /></Link>
        <Link to='https://www.google.com'><img className={styles.profile} src={profile} alt="" /></Link>
        <Dropdown/>
      </div>
    </div>
  );
}
