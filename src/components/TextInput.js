import React from 'react';

const TextInput = ({ type, name, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded px-3 py-2 text-gray-700 text-sm sm:ring-mustard sm:focus:ring-3  ${className}`}
    />
  );
};

export default TextInput;
