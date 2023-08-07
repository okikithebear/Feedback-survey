import React from 'react';

const SubmitButton = () => {
  return (
    <div className='flex justify-center'>
      <button
        type='submit'
        className='bg-yellow-500 hover:bg-mustard text-white font-bold py-2 px-4 rounded'
        style={{
          width: '100%',
          fontSize: '1.1rem',
          maxWidth: '280px',
        }}
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default SubmitButton;
