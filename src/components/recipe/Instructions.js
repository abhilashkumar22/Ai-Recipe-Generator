import React from 'react';
import { motion } from 'framer-motion';

const Instructions = ({ instructions }) => (
  <div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h3>
    <ol className="space-y-4">
      {instructions.map((step, index) => (
        <motion.li
          key={index}
          className="flex items-start"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white font-bold mr-4">{index + 1}</span>
          <p className="text-gray-700 flex-grow pt-1">{step}</p>
        </motion.li>
      ))}
    </ol>
  </div>
);

export default Instructions;
