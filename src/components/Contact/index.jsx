import React from 'react';
import styles from './style.module.scss';
import ContactDetails from './ContactDetails';

function index() {
  return (
    <div className={styles.main}>
        <h1 className={`${styles.heading} border-red-300`}>Contact Us</h1>
        <div className={styles.contact}>
        <ContactDetails/>
        </div>
    </div>
  )
}

export default index