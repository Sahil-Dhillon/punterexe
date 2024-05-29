// src/components/SplashScreen.js

import React from 'react';
import { motion } from 'framer-motion';
// import './SplashScreen.css';
// import logo from ''; // Adjust the path to your logo

const splashScreenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const SplashScreen = () => {
  return (
    <motion.div
      className="splash-screen"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={splashScreenVariants}
      transition={{ duration: 1 }}
    >
      <motion.img
        src='assets/img/logo/logo_wbg.png'
        alt="Logo"
        className="logo_splash"
        animate={{ width: 350}}
        transition={{ repeat: 0, duration: 0.8, ease: "linear" }}
      />
    </motion.div>
  );
};

export default SplashScreen;
