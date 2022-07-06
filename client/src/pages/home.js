import Navbar from "../components/navbar/navbar";
import Background from "../components/background/bg";
import Book from "../components/card/book";
import styles from "../css/home.module.css";
import Card from "../components/card/slide";
import LoginModal from "../components/auth/login"
import RegisterModal from "../components/auth/register"
import {useState} from 'react'

export default function Home() {

  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)

  return (
    <div>
      <div className={styles.bgWhite}></div>
      <Background />
      <Navbar setLogin={setLogin} setRegister={setRegister}/>
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
      {login && <LoginModal setLogin={setLogin}/>}
      {register && <RegisterModal setRegister={setRegister}/>}
    </div>
  );
}
