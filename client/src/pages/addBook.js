import styles from "../css/book.module.css";
import Navbar from "../components/navbar/navAuth";
import Bg from "../components/background/bg";
import attach from "../assets/icons/attachment.png";
import book from "../assets/icons/book.png";

export default function Add() {
  return (
    <div className={styles.addForm}>
      <Bg />
      <Navbar />
      <h1 className={styles.abTitle}>Add Book</h1>
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
