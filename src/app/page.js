'use client';
import React from 'react';
import Main from '../components/Main';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { CartProvider } from '../components/Cart/CartContext';

export default function page() {
  return (
    <CartProvider>
    <div>
      <Main/>
      <Products/>
      <Contact/>
      <Footer/>  
    </div>
    </CartProvider>
  )
}
