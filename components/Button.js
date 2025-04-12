'use client'

import React from 'react';
import { motion } from 'framer-motion';


export default function PulsatingButton({ children, className = '', ...props }) {
  return (
    <motion.button
      {...props}
      className={`px-4 py-2 bg-blue-600 text-white font-semibold shadow-lg focus:outline-none ${className}`}
      animate={{ scale: [1, 1.1, 1, 1.1, 1, 1.1, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.button>
  );
}