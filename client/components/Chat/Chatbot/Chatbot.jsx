import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import styles from "./Chatbot.module.css";

import robot from "../image/robotito.svg";
import Image from "next/image";

import { ThemeProvider } from "styled-components";
import { background } from "@chakra-ui/react";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const MyImage = (props) => {
  return (
    <Image loader={myLoader} src={robot} alt="Picture" width={33} height={34} />
  ); 
};

const Answers = (props) => {
  const { steps } = props;
  const question = steps.question.value;
  const answer = question;
  let result

 if (answer.toLowerCase().includes('branch')) {
    return <Sucursales />;
  } 
  else if (answer.toLowerCase().includes('hour') || answer.toLowerCase().includes('office')) {
    result = `Our office hours are Monday to Friday from 9 a.m. to 6 p.m.`;
  } 
  else if (answer.toLowerCase().includes('paid') || answer.toLowerCase().includes('methods')) {
    result = `All our products can be paid in cash, debit and credit cards or by transfer`;
  } 
  else if (answer.toLowerCase().includes('teclado')) {
    return <Sucursales />;
  }
  else if (answer.toLowerCase().includes("all") || answer.toLowerCase().includes("product")) {
    return (
      <AllProducts answer={answer} />
    );
  } 
  else if (answer.toLowerCase().includes("keyboard") || answer.toLowerCase().includes("keyboards")) {
    return (
      <GamingKeyboards answer={answer} />
    );
  } 
  else if (answer.toLowerCase().includes("monitor") || answer.toLowerCase().includes("monitors")) {
      return (
        <Monitors answer={answer} />
      );
  } 
  else if (answer.toLowerCase().includes("microphone") || answer.toLowerCase().includes("microphones")) {
      return (
        <Microphone answer={answer} />
      );
  } 
  else if (answer.toLowerCase().includes("mouse pad") || answer.toLowerCase().includes("pads") || answer.toLowerCase().includes("pad")) {
      return (
        <MousePads answer={answer} />
      );
  } 
  else if (answer.toLowerCase().includes("mouse") || answer.toLowerCase().includes("mouses")) {
      return (
        <GamingMouses answer={answer} />
      );
  } 
  else if (answer.toLowerCase().includes("customer") || answer.toLowerCase().includes("support") 
          || answer.toLowerCase().includes("key") || answer.toLowerCase().includes("keys")) {
      return (
        <CustomerSupport />
      );
  } 
  else {
    result = `Oh, sorry… I couldn't understand you`;
  }

  return (
    <div style={{ color: "black" }}>
      <div className={styles.flex}>
        <div className={styles.botIcon}>
          <MyImage />
        </div>
        <div className={styles.botMessage}>{result}</div>
      </div>
    </div>
  );
};

// -----------------

const Monitors = () => {
  return (
      <div>
          <div className={styles.flex}>
              <div className={styles.botIcon}><MyImage /></div>
              <div className={styles.botMessage}>
              <a style={{ textDecoration: "none" }} href={`/products?category=Monitors`} >
                <p style={{ cursor: "default" }}>
                  To see all our Monitors, please <b style={{ cursor: "pointer" }}>click here!</b>  
                </p>
              </a>
              </div>
          </div>
      </div>
  );
};
// -----------------

const Microphone = () => {
  return (
      <div>
          <div className={styles.flex}>
              <div className={styles.botIcon}><MyImage /></div>
              <div className={styles.botMessage}>
              <a style={{ textDecoration: "none" }} href={`/products?category=Microphone`} >
                <p style={{ cursor: "default" }}>
                  To see all our Microphones, please <b style={{ cursor: "pointer" }}>click here!</b>  
                </p>
              </a>
              </div>
          </div>
      </div>
  );
};
// -----------------

const GamingMouses = () => {
  return ( 
      <div>
          <div className={styles.flex}>
              <div className={styles.botIcon}><MyImage /></div>
              <div className={styles.botMessage}>
              <a style={{ textDecoration: "none" }} href={`/products?category=Gaming%20Mouses`} >
                <p style={{ cursor: "default" }}>
                  To see all our Gaming Mouses, please <b style={{ cursor: "pointer" }}>click here!</b>  
                </p>
              </a>
              </div>
          </div>
      </div>
  );
};
// -----------------

const MousePads = () => {
  return (
      <div>
          <div className={styles.flex}>
              <div className={styles.botIcon}><MyImage /></div>
              <div className={styles.botMessage}>
              <a style={{ textDecoration: "none" }} href={`/products?category=Mouse%20Pads`} >
                <p style={{ cursor: "default" }}>
                  To see all our Mouse Pads, please <b style={{ cursor: "pointer" }}>click here!</b>  
                </p>
              </a>
              </div>
          </div>
      </div>
  );
};

// -----------------

const GamingKeyboards = () => {
  return (
      <div>
          <div className={styles.flex}>
              <div className={styles.botIcon}><MyImage /></div>
              <div className={styles.botMessage}>
              <a style={{ textDecoration: "none" }} href={`/products?category=Gaming%20Keyboards`} >
                <p style={{ cursor: "default" }}>
                  To see all our Gaming Keyboards, please <b style={{ cursor: "pointer" }}>click here!</b>  
                </p>
              </a>
              </div>
          </div>
      </div>
  );
};

// -----------------

const AllProducts = (answer) => {
  return (
      <div>
          <div className={styles.flex}>
              <div className={styles.botIcon}><MyImage /></div>
              <div className={styles.botMessage}>
              <a style={{ textDecoration: "none" }} href={`/products?category=${answer}`} >
                <p style={{ cursor: "default" }}>
                  To see all our products, please <b style={{ cursor: "pointer" }}>click here!</b>  
                </p>
              </a>
              </div>
          </div>
      </div>
  );
};

// -----------------

const Sucursales = () => {
  return (
      <div>
          <div className={styles.flex}>
              <div className={styles.botIcon}><MyImage /></div>
              <div className={styles.botMessage}>
                <p>Our branches are located in:</p> 
                <ul style={{marginLeft: '30px'}}>
                  <li>Palermo</li>
                  <li>Microcentro</li>
                  <li>Recoleta</li>
                  <li>Quilmes</li>
                  <li>Berazategui</li>
                </ul>
              </div>
          </div>
      </div>
  );
};

// -----------------
const Topics = () => {
  return (
    <div style={{color: 'black', marginLeft: '-70px'}} >
        <div className={styles.flex}>
            <div className={styles.botMessage2}>
                <li>Poducts 💳</li>
                <li>Payment methods 🏦</li>
                <li>key management 🔓</li>
                <li>Branch offices 🚚</li>
                <li>Customer support ➕</li>
                <li>Office hours 💲</li>
            </div>
        </div>
      </div>
  );
};

// -----------------
const CustomerSupport = (answer) => {
  return (
      <div>
          <div className={styles.flex}>
              <div className={styles.botIcon}><MyImage /></div>
              <div className={styles.botMessage}>
              <a style={{ textDecoration: "none" }} href={`/support`} >
                <p style={{ cursor: "default" }}>
                  If you have any doubt you can contact us, please <b style={{ cursor: "pointer" }}>click here!</b>  
                </p>
              </a>
              </div>
          </div>
      </div>
  );
};

class Chatbott extends Component {
  render() {
    // function c(value) {
    //   if (isNaN(value)) {
    //     return 'value should be a number';
    //   } else if (value < 0) {
    //     return 'value should be positive';
    //   }

    //   return true;
    // }

    const theme = {
      fontFamily: "Arial, Helvetica, sans-serif",
      headerBgColor: "#44b8fc",
      headerFontColor: "#fff",
      headerFontSize: "25px",
      botBubbleColor: "#44b8fc",
      botFontColor: "#fff",
      userBubbleColor: "white",
      userFontColor: "#4c4c4c",
    };

    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Gamie"
          customStyle={{
            background: "transparent",
            boxShadow: "none",
            width: "300px",
          }}
          steps={[
            {
              id: "1",
              message: "Welcome to Gamerland!",
              trigger: "2",
            },
            {
              id: "2",
              message: `I'm Gamie`,
              trigger: "3",
            },
            {
              id: "3",
              message: "How can I help you?",
              trigger: "10",
            },
            {
              id: "4",
              message: "How can I help you?",
              trigger: "question",
            },
            
            {
              id: "5",
              message: "do you have another question?",
              trigger: "8",
            },
            {
              id: "6",
              message: "Can I help you with something else?",
              trigger: "8",
            },
            {
              id: "question",
              user: true,
              trigger: "7",
            },
            {
              id: "7",
              component: <Answers />,
              trigger: "6",
            },
            {
              id: "8",
              options: [
                { value: 1, label: "YES", trigger: "4" },
                { value: 2, label: "NO", trigger: "9" },
              ],
            },
            {
              id: "9",
              message: `Ok. If you need anything else write me again. Remember that we can talk about these topics:`,
              trigger: "11",
            },
            {
              id: "10",
              message: `We can talk about these topics:`,
              trigger: "11",
            },
            {
              id: "11",
              component: <Topics />,
              trigger: "question",
            }
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default Chatbott;

// Uy, perdón… no pude entenderte. 🤦‍♀️

// Oki. Si necesitás algo más, acordate que podemos hablar sobre estos temas:
// Ok. If you need anything else write to me again. Remember that we can talk about these topics:

// Perfecto. Acordate que puedo ayudarte con estos temas:
// Perfect. Remember that I can help you with these topics:

// Dale, cualquier cosa volvé a escribirme. Acordate que puedo ayudarte con estos temas:
// Ok, if you have any other questions write to me again. Remember that I can help you with these topics:

// 1. Poductos 💳
// 2. Horarios de atención 💲
// 3. Medios de pago 🏦
// 4. Gestión de claves 🔓
// 5. Sucursales 🚚
// 6. Soporte ➕
