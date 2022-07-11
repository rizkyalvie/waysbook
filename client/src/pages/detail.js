import styles from "../css/detail.module.css";
import Navbar from "../components/navbar/navbar";
import NavAuth from "../components/navbar/navAuth"
import Bg from "../components/background/bg";
import cart from "../assets/icons/cartwhite.png";
import NotifModal from '../components/card/addCart'

import { useShoppingCart } from "use-shopping-cart";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

export default function Detail() {

  let {id} = useParams()
  const [notif, setNotif] = useState(false)

  const [state] = useContext(UserContext)

  const {addItem} = useShoppingCart()

  let { data: book } = useQuery('bookCache', async () => {
    const response = await API.get('/book/' + id);
    return response.data.data 
  });

  console.log(book)

  function handleCart(e){
    e.preventDefault();
    addItem({
      id: book?.id,
      author: book?.author,
      name: book?.title,
      currency: 'USD',
      price: book?.price,
      image: book?.thumbnail
    })
  }

  return (
    <div>
      <Bg />
      {state?.isLogin === true ? <NavAuth/> : <Navbar/>}
      <div className={styles.bookDetailContainer}>
        <div className={styles.top}>
          <div className={styles.left}>
            <img src={book?.thumbnail} />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>{book?.title}</div>
            <div className={styles.author}>
              <i>{book?.author}</i>
            </div>
            <div className={styles.date}>
              <h2>Publication date</h2>
              <p>{book?.publicationdate}</p>
            </div>
            <div className={styles.pages}>
              <h2>Pages</h2>
              <p>{book?.pages}</p>
            </div>
            <div className={styles.ISBN}>
              <h2>ISBN</h2>
              <p>{book?.isbn}</p>
            </div>
            <div className={styles.price}>
              <h2>Price</h2>
              <p>{book?.price}</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <h1>About This Book</h1>
          <div className={styles.desc}>
            <p>
              {book?.description}
            </p>
          </div>
          <button onClick={(e) => {handleCart(e); setNotif(true)}}>
            Add Cart <img src={cart} />
          </button>
        </div>
      </div>
      {notif && <NotifModal setNotif={setNotif} />}
    </div>
  );
}
