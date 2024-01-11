'use client';
import React, { useState } from 'react';
import SplashScreen from '../components/SplashScreen';
import Main from '../components/Main';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Cart from '../components/Cart';
import { CartProvider } from '../components/Cart/CartContext';

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };
  return (
    <div>
       {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && (
        <>
      <Header/>
      <div id="home">
      <Main/>
      </div>
      <div id="shop">
      <Products/>
      </div>
      <div id="contact">
      <Contact/>
      </div>
      <Footer/> 
      </> 
      )}
    </div>

  )
}
