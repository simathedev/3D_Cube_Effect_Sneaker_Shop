import React from 'react';
import styles from './style.module.scss';
import { FaCheck } from "react-icons/fa";

const index = () => {
  return (
    <div className={styles.checkoutMain}>
        <FaCheck />
            <h1 className={`${styles.totalHeading} text-[8rem] font-bold my-2`}>Checkout Complete!</h1>
            <h1 className={`${styles.totalHeading} text-[8rem] font-bold my-2`}>I hope you had a great user experience. feel free to reach out to me.</h1>
    </div>
  );
};

export default index;