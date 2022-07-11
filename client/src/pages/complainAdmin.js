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
    const [messages, setMessages] = useState([])

    const title = "Complain admin"
    document.title = 'DumbMerch | ' + title

    const [state] = useContext(UserContext)

    useEffect(() =>{
        socket = io('http://localhost:5000', {
            auth: {
                token: localStorage.getItem('token')
            }
        })

        socket.on("new message", () => {
            socket.emit('load messages', contact?.id)
        })

        loadContacts()
        loadMessages()

        return () => {
            socket.disconnect()
        }
    }, [messages]) 

    const loadContacts = () => {
        socket.emit("load user contacts")
        socket.on("user contacts", (data) => {
            
            let dataContacts = data.map((item) => ({
                ...item,
                message: item.senderMessage.length > 0 ? item.senderMessage[item.senderMessage.length - 1].message : 'Click here to start message'
            }))
            
            setContacts(dataContacts)
        })
    }

    const onClickContact = (data) => {
        setContact(data)

        socket.emit('load messages', data.id)
    }


    const loadMessages = () => {
        socket.on('messages', async (data) => {
            if(data.length > 0){
                const dataMessages = data.map((item) => ({
                    idSender: item.sender.id,
                    message: item.message
                }))
                setMessages(dataMessages)

                loadContacts()
            }else{
                setMessages([])
                loadContacts()
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
        <div className={styles.chatContainer}> 
          <div className={styles.chatList}>
            <Contact dataContact={contacts} clickContact={onClickContact} contact={contact}/>
          </div>
          <div className={styles.chat}>
            <div className={styles.contactProfile}>
              <img src={profile} alt="" />
              <p>Ananda Rizky Alvie Nuryahya</p>
            </div>
            <div className={styles.message}>
              <Chat contact={contact} messages={messages} user={state.user} sendMessage={onSendMessage}/>
            </div>
            <div className={styles.inputMessage}>
              <input type="text" placeholder="Write message here" />
              <button>Send</button>
            </div>
          </div>
        </div>
      <Navbar />
    </div>
  );
}
