// Cart.jsx

import React, { useEffect } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import { useCart } from './CartContext'; // Import the useCart hook
import { FaMinus,FaPlus,FaTimes } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  FaCartShopping } from "react-icons/fa6";

function Cart() {
  const { cartState, dispatch } = useCart(); 
  // Get cartState from context
  const handleIncreaseQuantity = (item) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item });
  };

  const handleDecreaseQuantity = (item) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item });
  };

  const handleRemoveItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };
  const handleCheckout = () => {
    // Check the condition for more products (here it's assumed that there are no more products to display)
    const noMoreProducts = true; // Replace this with your condition to check for more products

    if (noMoreProducts) {
      toast.success('That All. Checkout Complete', {
        position: toast.POSITION.BOTTOM_RIGHT, // Set the position to bottom-center
        className: 'toastifySuccess',
        //autoClose: 3000, // Close the notification after 3000 milliseconds (3 seconds)
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
    <div className={`${styles.main} min-w-full`}>
      {cartState.items.length === 0 ? (
        <h2>No items in cart</h2>
      ) : (
     <div className={`${styles.cartItems} ${styles.scrollable} min-w-full`}>
        {cartState.items.map((item, index) => (
          <div key={index} className={`${styles.cartItem} xs:w-[90%] md:w-[60%] lg:w-[40%] relative`}>
          <FaTimes className="absolute top-2 right-3 z-10" onClick={() => handleRemoveItem(item)} />
            <Image
              src={item.productImage}
              alt={item.title}
              width={100}
              height={100}
              priority={true}
              className={styles.productImage}
            />
            <div className={`${styles.cartDescription} xs:w-[80%] md:w-[60%]`}>
            <p>{item.title}</p>
            <p>R {item.price}</p>
            <p>size: {item.size}</p>
            <div className={`flex items-center justify-around`}>
            <FaMinus onClick={() => handleDecreaseQuantity(item)} />
            <p> {item.quantity} </p>
            <FaPlus onClick={() => handleIncreaseQuantity(item)} />
            </div>
           
            </div>
          </div>
        ))}
        
      </div>
      )}
      <h1 className={`${styles.totalHeading} text-[8rem] font-bold my-2`}>Total: R {cartState.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,  minimumIntegerDigits: 1, }).replace(/,/g, ' ')}</h1>
      {cartState.items.length > 0 && (
        <button className={``} onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
