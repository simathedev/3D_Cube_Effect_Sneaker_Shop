// Cart.jsx

import React, { useEffect , useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import { useCart } from './CartContext'; // Import the useCart hook
import { FaMinus,FaPlus,FaTimes } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  FaCartShopping } from "react-icons/fa6";
import Checkout from '../../app/widgets/checkoutMessage';

function Cart() {
  const { cartState, dispatch } = useCart();
  const [checkoutMessageVisible, setCheckoutMessageVisible] = useState(false); 
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
      setCheckoutMessageVisible(true); 
    }

   
  };
  const handleCloseMessage = () => {
    // Set checkoutMessageVisible to false when the message should be closed
    setCheckoutMessageVisible(false);
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
              className={`${styles.productImage}`}
            />
            <div className={`${styles.cartDescription} xs:w-[80%] md:w-[60%]`}>
            <p className='font-semibold'>{item.title}</p>
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
      <h1 className={`${styles.totalHeading} text-[8rem] font-bold my-2`}>Total: R {cartState.total.toLocaleString('en-ZA', {minimumFractionDigits: 2, maximumFractionDigits: 2,  minimumIntegerDigits: 1, }).replace(/\./g, '##').replace(/##/g, ',')}</h1>
      {cartState.items.length > 0 && (
        <button className={``} onClick={handleCheckout}>
          Checkout
        </button>
      )}
      <Checkout checkoutMessageVisible={checkoutMessageVisible}  onCloseMessage={handleCloseMessage}/>
    </div>
  );
}

export default Cart;
