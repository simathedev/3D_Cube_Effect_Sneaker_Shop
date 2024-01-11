'use client';
import React, { useState } from 'react';
import { useCart } from '../Cart/CartContext';
import styles from './style.module.css';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Index({ product, onClose }) {
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    if (selectedSize) {
      const itemToAdd = {
        title: product.name,
        price: product.price,
        size: selectedSize,
        productImage: product.image,
      };
      dispatch({ type: 'ADD_TO_CART', payload: itemToAdd });
      toast.success(`${product.name} added to cart`, {
        className: styles.toastifySuccess,
        position: toast.POSITION.BOTTOM_RIGHT,
        //autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setSelectedSize(null);
    } else {
      toast.error('Please select a size before adding to cart', {
        className: styles.toastifyError,
        position: toast.POSITION.BOTTOM_RIGHT,
        //autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className={`${styles.productContainer}`}>
      <Image
        src={product.image}
        alt={product.name}
        width={350}
        height={350}
        priority={true}
        className={styles.productImage}
        style={{ borderRadius: '9%' }}
      />
      <p className={'font-semibold'}>{product.name}</p>
      <p>Price: R {product.price}</p>
      <div>
        UK Sizes: <br />
        {product.sizes.map((size) => (
          <button
          className={styles.sizeButton}
            key={size}
            onClick={() => handleSizeSelection(size)}
            style={{
              backgroundColor: size === selectedSize ? '  rgba(205, 197, 197, 0.749)' : 'white',
              margin: '0.2rem',
              flexWrap: 'wrap',
              color:'black'
            }}
          >
            {size}
          </button>
        ))}
      </div>
      <button onClick={addToCart} className='m-2'>
        Add To Cart
      </button>
      <button onClick={onClose} className='m-2'>
        Close
      </button>
    </div>
  );
}

export default Index;
