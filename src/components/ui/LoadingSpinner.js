import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-10">
    <motion.div
      style={{
        width: 50,
        height: 50,
        border: '5px solid #e2e8f0',
        borderTop: '5px solid #4f46e5',
        borderRadius: '50%',
      }}
      animate={{ rotate: 360 }}
      transition={{ loop: Infinity, ease: 'linear', duration: 1 }}
    />
  </div>
);

export default LoadingSpinner;