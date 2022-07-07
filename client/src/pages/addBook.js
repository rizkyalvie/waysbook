import styles from "../css/book.module.css";
import Navbar from "../components/navbar/navAuth";
import Bg from "../components/background/bg";
import attach from "../assets/icons/attachment.png";
import book from "../assets/icons/book.png";
import { Link } from "react-router-dom";

export default function Add() {
  return (
    <div className={styles.addForm}>
      <Bg />
      <Navbar />
      <h1 className={styles.abTitle}>Add Book</h1>
      <Link to="/list-transaction" className={styles.lt}>
        List Transaction
      </Link>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Publication Date" />
        <input type="text" placeholder="Pages" />
        <input type="text" placeholder="ISBN" />
        <input type="text" placeholder="Price" />
        <textarea>About This Book</textarea>
        <label htmlFor="cover" className={styles.cover}>
          <p>Attach Book Cover</p>
          <img src={attach} alt="" />
          <input type="file" id="cover" hidden />
        </label>
        <label htmlFor="book" className={styles.cover}>
          <p>Attach Book File</p>
          <img src={attach} alt="" />
          <input type="file" id="book" hidden />
        </label>
        <button className={styles.bookBtn}>
          Add Book <img src={book} alt="" />
        </button>
      </form>
    </div>
  );
}
