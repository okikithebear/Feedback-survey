import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NumberScale = ({ value, onRatingChange }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleNumberClick = (number) => {
    setSelectedValue(number);
    onRatingChange(number);
  };

  const redColor = '#FF0000';
  const yellowColor = '#FFFF00';
  const greenColor = '#00FF00';

  let backgroundColor;
  if (selectedValue >= 1 && selectedValue <= 3) {
    backgroundColor = redColor;
  } else if (selectedValue >= 4 && selectedValue <= 7) {
    backgroundColor = yellowColor;
  } else if (selectedValue >= 8 && selectedValue <= 10) {
    backgroundColor = greenColor;
  } else {
    backgroundColor = 'white';
  }

  return (
    <div className='space-y-4'>
      <p className='text-sm md:text-lg lg:text-sm text-white font-bold'>
        On a scale of 1-10, how would you rate your experience? (10 is highest
        and 1 is lowest)
      </p>
      <div className='flex items-center bg-black rounded overflow-hidden'>
        <motion.div
          className='h-8 sm:h-12 w-full flex'
          style={{ width: '100%' }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
            <motion.div
              key={number}
              className='flex-1 sm:border-r border-black border-2 flex items-center justify-center'
              style={{
                backgroundColor:
                  selectedValue >= number ? backgroundColor : 'white',
                cursor: 'pointer',
                userSelect: 'none',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleNumberClick(number)}
            >
              <p
                className={`text-black font-bold text-xs sm:text-xl ${
                  selectedValue >= number ? 'scale-110' : ''
                }`}
              >
                {number}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NumberScale;
