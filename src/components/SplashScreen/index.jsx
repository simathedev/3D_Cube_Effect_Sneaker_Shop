'use client';
import React, { useEffect , useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';


const SplashScreen = ({ onComplete }) => {
  // Animation variants
  const splashVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { duration: 1 } },
  };

  // useEffect to handle animation and remove splash screen
  useEffect(() => {
    setTimeout(() => {
      onComplete(); // Callback to notify completion and remove splash screen
    }, 3000); // Adjust the time as needed (3 seconds in this case)
  }, []);

  return (
    <motion.div
      className={`splash-screen ${styles.main}`}
      initial="initial"
      animate="animate"
      variants={splashVariants}
    >
      {/* Your splash screen content */}
      <h1 className={`${styles.title} xs:text-[5rem] sm:text-[5rem] md:text-[9rem]`}>Shoebox</h1>
      <h1 className={styles.subtitle}>Shop all your favs</h1>
    </motion.div>
  );
};

export default SplashScreen;
