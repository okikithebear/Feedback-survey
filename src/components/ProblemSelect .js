import React from 'react';

const ProblemSelect = ({ selectedProblem, onChange }) => {
  const problems = [
    'Pricing',
    'Wrong Orders',
    'Food Quality',
    'Late Deliveries',
    'Fraud',
    'Customer Service',
    'Online Service',
  ];

  return (
    <div className='flex flex-col'>
      <label className='text-sm md:text-lg text-white font-bold mb-2'>
        Please tell us the problem you have with our product?
      </label>
      <select
        value={selectedProblem}
        onChange={(e) => onChange(e.target.value)}
        className='px-2 py-1 border rounded sm:hover:ring-4 sm:ring-mustard sm:w-full text-sm'
      >
        <option value=''>Select problem...</option>
        {problems.map((problem) => (
          <option key={problem} value={problem}>
            {problem}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProblemSelect;
