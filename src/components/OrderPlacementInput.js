import React from 'react';

const OrderPlacementInput = ({ orderPlacement, onChange }) => {
  const options = [
    'Walk-in',
    'Phone-call',
    'Instagram',
    'HeyFood',
    'WhatsApp',
    'Website',
  ];

  return (
    <div className='flex flex-col '>
      <label className='text-sm md:text-lg text-white font-bold mb-2'>
        How did you place your order?
      </label>
      <select
        value={orderPlacement}
        onChange={(e) => onChange(e.target.value)}
        className='px-2 py-1 border rounded sm:hover:ring-3 sm:ring-mustard sm:focus:ring-3  sm:w-full text-sm'
      >
        <option value=''>Select order placement...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderPlacementInput;
