import React , { useState } from 'react';
import styles from './style.module.scss';
import { FaCheck , FaTimes , FaGithub , FaEnvelope , FaLinkedin } from "react-icons/fa";


const Index = ({ checkoutMessageVisible , onCloseMessage }) => {
  const closeMessage = () => {
    // Call the provided callback function to close the message
    onCloseMessage();
  };
  return (
    <div className={styles.checkoutMain}>
      {checkoutMessageVisible && (
        <div className={`${styles.checkoutContainer} shadow-xl relative`}>
          <FaTimes className='absolute top-2 right-3 z-10' onClick={closeMessage}/>
          <FaCheck className='text-green-500 text-4xl'/>
            <h1 className={` ${styles.totalHeading} text-[8rem] font-bold my-2 text-gray-600`}>Checkout Complete!</h1>
            <h1 className={` ${styles.totalHeading} text-[8rem] font-bold my-2 text-gray-600 w-[80%]`}>I hope you had a great user experience. Feel free to reach out to me if you would like to work with me.</h1>
            <div className={ `${styles.socialLinks} flex gap-3 my-2`}>
            <a
                href={'https://github.com/simathedev'}
                target="_blank"
                rel="noopener noreferrer"
              >
            <FaGithub className='text-2xl text-gray-600 hover:text-orange-500'/>
            </a>
            <a
                href={'mailto:simathedev@gmail.com'}
                target="_blank"
                rel="noopener noreferrer"
              >
            <FaEnvelope  className='text-2xl text-gray-600 hover:text-orange-500'/>
            </a>
            <a
                href={'https://www.linkedin.com/in/simanye-m-b2118a221/'}
                target="_blank"
                rel="noopener noreferrer"
              >
            <FaLinkedin  className='text-2xl text-gray-600 hover:text-orange-500'/>
            </a>
            </div>
        </div>
        )}
            </div>
  );
};

export default Index;