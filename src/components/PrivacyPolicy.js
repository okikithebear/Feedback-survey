// PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = ({ onClose }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Privacy Policy</h2>
        {/* Add your privacy policy content here */}
        <p>This is the privacy policy page.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
