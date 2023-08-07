import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FeedbackForm from './components/FeedbackForm';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Router>
      <div className='bg-gradient-to-b from-white to-black min-h-screen flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='max-w-2xl w-full p-12 mt-6 mb-6 bg-black border border-mustard rounded shadow-lg'
        >
          <header className='text-2xl font-bold mb-6 text-center text-white'>
            Customer Satisfaction Survey
          </header>

          <hr className='my-6 border-gray-200' />
          <main>
            <Routes>
              <Route
                path='/'
                element={
                  !submitted ? (
                    <FeedbackForm onFormSubmit={() => setSubmitted(true)} />
                  ) : (
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
                        We value your input and strive to improve our services,
                        Love Chef Kabs!
                      </motion.p>
                    </div>
                  )
                }
              />
              <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
            </Routes>
          </main>

          <hr className='my-6 border-gray-200' />
        </motion.div>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
