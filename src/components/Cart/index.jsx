'use client';
import React from 'react';
import styles from './style.module.scss';
import { shoeDetails } from './data.js';
import Image from 'next/image';
import { useCart } from './CartContext'; // Import the useCart hook

function Index() {
  const { dispatch } = useCart();

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <div className={`${styles.main} min-h-screen`}>
      {/* ... (previous code) */}
      <div className={`${styles.products} xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row`}>
        {shoeDetails.map((detail) => (
          <div key={detail.id} className={`${styles.product} xs:m-[1rem] m-[2rem] shadow-lg transform hover:scale-105 `}>
            {/* Your record details */}
            <Image
              src={detail.image}
              alt={detail.name}
              width={300}
              height={300}
              className={styles.productImage}
              style={{ borderRadius: '9%' }}
            />
            <p className={styles.name}>{detail.name}</p>
            <p>{detail.price}</p>
            <button className='mt-[1rem] hover:scale-105' onClick={() => addToCart(detail)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {/* ... (remaining code) */}
    </div>
  );
}

export default Index;
