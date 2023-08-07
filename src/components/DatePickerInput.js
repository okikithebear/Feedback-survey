import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerInput = ({ selectedDate, onChange }) => {
  return (
    <div className='flex flex-col mb-0'>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => onChange(date)}
        dateFormat='MM/dd/yyyy'
        placeholderText='mm/dd/yyyy'
        className='px-2 py-1 border rounded w-full sm:w-2/5 hover:ring-4 ring-mustard'
      />
    </div>
  );
};

export default DatePickerInput;
