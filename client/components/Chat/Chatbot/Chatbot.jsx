import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import styles from "./Chatbot.module.css"

import robot from '../image/robotito.svg'
import Image from 'next/image'

import { ThemeProvider } from "styled-components";
import { background } from '@chakra-ui/react';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const MyImage = (props) => {
  return ( 
    <Image
      loader={myLoader}
      src={robot}
      alt="Picture"
      width={33}
      height={34}
    />
  )
}

const Answers = (props) => {
  const { steps } = props;
  const question = steps.question.value;
  const answer = question;
  let result
  
 if (answer.toLowerCase().includes('sucursal')) {
    return <Sucursales />;
  } 
  else if (answer.toLowerCase().includes('horario') || answer.toLowerCase().includes('atenci')) {
    result = `Nuestro horario de atención es de lunes a viernes de 9 a 18 hs`;
  } 
  else if (answer.toLowerCase().includes('medio') || answer.toLowerCase().includes('pago')) {
    result = `Todos los productos se pueden abonar en efectivo, tarjetas de debito y credito o por transferencia`;
  } 
  else if (answer.toLowerCase().includes('teclado')) {
    return <Sucursales />;
  } 
  
  else {
    result = `Oh, sorry… I couldn't understand you`;
  } 


  return (
    <div style={{color: 'black'}} >
        <div className={styles.flex}>
            <div className={styles.botIcon}><MyImage /></div>
            <div className={styles.botMessage}>{result}</div>
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
                <p>Nuestras sucursales se encuentran en:</p> 
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
                <li>Poductos 💳</li>
                <li>Medios de pago 🏦</li>
                <li>Gestión de claves 🔓</li>
                <li>Sucursales 🚚</li>
                <li>Soporte ➕</li>
                <li>Horarios de atención 💲</li>
            </div>
        </div>
    </div>  
  );
};



class Chatbott extends Component {
  
  render() {
    function c(value) {
      if (isNaN(value)) {
        return 'value should be a number';
      } else if (value < 0) {
        return 'value should be positive';
      }

      return true;
    }

    const theme = {
      fontFamily: "Arial, Helvetica, sans-serif",
      headerBgColor: "#44b8fc",
      headerFontColor: "#fff",
      headerFontSize: "25px",
      botBubbleColor: "#44b8fc",
      botFontColor: "#fff",
      userBubbleColor: "white",
      userFontColor: "#4c4c4c"
     };

    return (
      <ThemeProvider theme={theme}>
        <ChatBot
        headerTitle="Gamie"
        customStyle={{background: 'transparent', boxShadow: 'none', width: '300px'}} 
        steps={[
          {
            id: '1',
            message: 'Welcome to Gamerland!',
            trigger: '2',
          },
          {
            id: '2',
            message: `I'm Gamie`,
            trigger: '3',
          },
          {
            id: '3',
            message: 'How can I help you?',
            trigger: 'question',
          },
          {
            id: '10',
            message: 'do you have another question?',
            trigger: '28',
          },
          {
            id: '11',
            message: 'Can I help you with something else?',
            trigger: '28',
          },
          {
            id: 'question',
            user: true,
            trigger: '8',
          },
          {
            id: '8',
            component: <Answers />,
            trigger: '11',
          },
          {
            id: '28',
            options: [
            { value: 1, label: 'YES', trigger: '3' },
            { value: 2, label: 'NO', trigger: '27' },
            ],
        },
        {
            id: '27',
            message: `Ok. If you need anything else write me again. Remember that we can talk about these topics:`,
            trigger: '30',
        },
        {
          id: '30',
          component: <Topics />,
          trigger: 'question',
        },
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