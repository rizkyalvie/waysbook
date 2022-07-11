import React from "react";
import Navbar from "../components/navbar/navAuth";
import Bg from "../components/background/bg";
import styles from "../css/complain.module.css";
import profile from "../assets/temp/profile.jpg";
import Contact from "../components/complain/contact";
import Chat from "../components/complain/chat";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
// import {useState} from 'react'

export default function Complain() {

  const [state] = useContext(UserContext)

  return (
    <div>
      <Bg />

      <h1 className={styles.cTitle}>Customer Complain</h1>
      {state?.user.data.status === "admin" ? 
        <div className={styles.chatContainer}>
          <div className={styles.chatList}>
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
          </div>
          <div className={styles.chat}>
            <div className={styles.contactProfile}>
              <img src={profile} alt="" />
              <p>Ananda Rizky Alvie Nuryahya</p>
            </div>
            <div className={styles.message}>
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
            </div>
            <div className={styles.inputMessage}>
              <input type="text" placeholder="Write message here" />
              <button>Send</button>
            </div>
          </div>
        </div>
       : 
        <div className={styles.chatContainerCustomer}>
          <div className={styles.chatCustomer}>
            <div className={styles.contactProfileCustomer}>
              <img src={profile} alt="" />
              <p>Admin Gantenk</p>
            </div>
            <div className={styles.messageCustomer}>
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
            </div>
            <div className={styles.inputMessageCustomer}>
              <input type="text" placeholder="Write message here" />
              <button>Send</button>
            </div>
          </div>
        </div>
      }
      <Navbar />
    </div>
  );
}
