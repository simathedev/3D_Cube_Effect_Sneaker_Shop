import React from 'react';
import styles from './style.module.scss';

const CartPopup = ({ count }) => {
  return (
    <div className={styles.cartPopup}>
      {count > 0 && <span className={styles.popupNumber}>{count}</span>}
    </div>
  );
};

export default CartPopup;
