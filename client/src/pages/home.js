import Navbar from "../components/navbar/navAuth";
import Background from "../components/background/bg";
import Book from "../components/card/book";
import styles from "../css/home.module.css";
import Card from "../components/card/slide";

export default function Home() {
  return (
    <div>
      {/* <Background /> */}
      <Navbar />
      <div className={styles.heading}>
        <h1>
          With us, you can shop online & help save your high street at the same
          time
        </h1>
      </div>
      <div className={styles.slider}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.listBook}>
        <div className={styles.title}>
          <h1>List Book</h1>
        </div>
        <div className={styles.book}>
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </div>
  );
}
