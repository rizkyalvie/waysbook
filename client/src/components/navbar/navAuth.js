import styles from "../../css/nav.module.css";
import logo from "../../assets/navbar/logo.png";
import profile from "../../assets/temp/profile.jpg";
import cart from "../../assets/navbar/cart.png";
import {Link} from 'react-router-dom'
import Dropdown from "./dropdown";
import {useState} from 'react'

export default function Navbar() {

  const [drop, setDrop] = useState(false)

  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.right}>
        <img className={styles.cart} src={cart} alt="" />
        {drop ? <button onClick={() => setDrop(false)} ><img className={styles.profile} src={profile} alt="" /></button> : <button onClick={() => setDrop(true)} ><img className={styles.profile} src={profile} alt="" /></button>}
      </div>
      {drop && <Dropdown/>}
    </div>
  );
}
