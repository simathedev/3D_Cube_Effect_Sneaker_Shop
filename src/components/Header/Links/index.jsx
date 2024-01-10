'use client';
import React , { useEffect,useState } from 'react';
import styles from './style.module.scss';
import {  FaCartShopping } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Cart from '../../Cart';
import { useCart } from '../../Cart/CartContext'; 
import CartPopup from '../../../app/widgets/Cartpopup';


export default function Index() {
  const { cartState, dispatch } = useCart();
 const links = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Shop",
            href: "/"
        },
        {
            title: "Contact",
            href: "/"
        },
    ]
    const [cartVisible, setCartVisible] = useState(false);
    const toggleCart = () => {
      setCartVisible(!cartVisible);
    };

  return (
    <div className={styles.main}>
  <div className={styles.link}>
        {links.map((link, i) => (
          <a key={`${i}`} href={link.href}>
            {link.title}
          </a>
        ))}
        {cartVisible ? (
          <FaTimes onClick={toggleCart} /> // Show close icon when cart is visible
        ) : (
        <div className={`flex`} onClick={toggleCart}>
        <FaCartShopping />
        <CartPopup count={cartState.count}/>
          </div>
        )}
       
      </div>
      {cartVisible &&
       <Cart />
       } 
  
    </div>
  )
}
