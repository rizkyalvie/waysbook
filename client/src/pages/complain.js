import React from "react";
import Navbar from "../components/navbar/navAuth";
import Bg from "../components/background/bg";
import styles from "../css/complain.module.css";
import profile from "../assets/temp/blank-profile.png";
import Contact from "../components/complain/contact";
import Chat from "../components/complain/chat";
import { UserContext } from "../context/userContext";
import { useContext, useState, useEffect } from "react";
// import {useState} from 'react'
import {io} from 'socket.io-client'

let socket
export default function Complain() {

  const [contact, setContact] = useState(null)
    const [contacts, setContacts] = useState([])
    // code here
    const [messages, setMessages] = useState([])

    const title = "Complain admin"
    document.title = 'DumbMerch | ' + title

    // code here
    const [state] = useContext(UserContext)

    useEffect(() =>{
        socket = io('http://localhost:5000', {
            auth: {
                token: localStorage.getItem("token")
            }
        })

        // code here
        socket.on("new message", () => {
            socket.emit('load messages', contact?.id)
        })
        
        // listen error sent from server
        socket.on("connect_error", (err) => {
            console.error(err.message); // not authorized
          });
        loadContact()
        loadMessages()

        return () => {
            socket.disconnect()
        }
    }, [messages]) // code here

    const loadContact = () => {
        // emit event load admin contact
        socket.emit("load admin contact")
        // listen event to get admin contact
        socket.on("admin contact", (data) => {
            // manipulate data to add message property with the newest message
            // code here

            const dataContact = {
                ...data,
                message: messages.length > 0 ? messages[messages.length - 1].message : 'Click here to start message'
            }
            setContacts([dataContact])
        })
    }

    // used for active style when click contact
    const onClickContact = (data) => {
        setContact(data)
        // code here
        socket.emit('load messages', data.id)
    }

    // code here
    const loadMessages = () => {
        socket.on('messages', async (data) => {
            if(data.length > 0){
                const dataMessages = data.map((item) => ({
                    idSender: item.sender.id,
                    message: item.message
                }))
                setMessages(dataMessages)
            }else{
                setMessages([])
                loadContact()
            }
        })
    }

    const onSendMessage = (e) => {
        if(e.key == "Enter"){
            const data = {
                idRecipient: contact.id,
                message: e.target.value
            }

            socket.emit('send message', data)
            e.target.value = ''
        }
    }


  return (
    <div>
      <Bg />

      <h1 className={styles.cTitle}>Customer Complain</h1>
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
      <Navbar />
    </div>
  );
}
