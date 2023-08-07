import React from 'react';
import { motion } from 'framer-motion';

const ThankYouPage = () => {
  return (
    <div className='text-center'>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-2xl font-bold mb-2 text-green-600'
      >
        Thank you for your feedback!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-gray-700'
      >
        We value your input and strive to improve our services, Love Chef Kabs!
      </motion.p>
    </div>
  );
};

export default ThankYouPage;
