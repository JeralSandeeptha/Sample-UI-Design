import React from 'react'
import Navbar from './Navbar'
import '../styles/HeroSection/heroSection.css';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.5
      }}
      exit={{
        opacity: 0
      }}
      className='hero'>
        <Navbar />
        <motion.div 
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
          }}
          className='hero-inner'>
            <motion.h2>OUR SERVICES</motion.h2>
            <motion.h1>BRAND</motion.h1>
            <motion.h1>DESIGN</motion.h1>
            <motion.h5>Best From Our Hard Work</motion.h5>
        </motion.div>
    </motion.div>
  )
}

export default HeroSection
