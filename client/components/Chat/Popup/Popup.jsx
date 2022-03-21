import React, { useState } from "react";
import Chatbott from '../Chatbot/Chatbot'
import Image from 'next/image'
import styles from  "./Popup.module.css";
import bot from '../image/bot.gif'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src={bot}
      alt="Picture of the author"
      width={200}
      height={200}
    />
  )
}

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // if(modal) {
  //   document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }

  return (
    <>
      <button onClick={toggleModal} className={styles.btnModal}>
        <MyImage /> 
      </button>
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal}></div>   
          <div className={styles.modalContent}>
            <Chatbott />
            <button className={styles.closeModal} onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}