import React from "react";
import Navbar from "../components/navbar/navAuth";
import Bg from "../components/background/bg";
import styles from "../css/cart.module.css";
import MyCart from "../components/cart/cart";

export default function Cart() {
  return (
    <div>
      <Bg />
      <Navbar />
      <div className={styles.cartContainer}>
        <div className={styles.left}>
          <h1 className={styles.mc}>My Cart</h1>
          <h1>Review Your order</h1>
          <hr />
          <div className={styles.list}>
            <MyCart />
            <MyCart />
            <MyCart />
            <MyCart />
          </div>
          <hr />
        </div>
        <div className={styles.right}>
          <hr />
          <div className={styles.total}>
            <div className={styles.subtotal}>
              <p>Subtotal:</p>
              <p>Rp134.000</p>
            </div>
            <div className={styles.qty}>
              <p>Qty:</p>
              <p>2</p>
            </div>
          </div>
          <hr />
          <div className={styles.price}>
            <p>Total:</p>
            <p>134.000</p>
          </div>
          <button className={styles.btnBuy}>Pay</button>
        </div>
      </div>
    </div>
  );
}
