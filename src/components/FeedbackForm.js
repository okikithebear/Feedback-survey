import React, { useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import NumberScale from './NumberScale';
import DatePickerInput from './DatePickerInput';
import OrderPlacementInput from './OrderPlacementInput';
import ProblemSelect from './ProblemSelect ';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { FaRegAddressBook } from 'react-icons/fa';

import { submitFeedback } from './api';

const validationSchema = Yup.object().shape({
  serviceRating: Yup.number()
    .required('Service rating is required')
    .min(1, 'Service rating must be at least 1')
    .max(10, 'Service rating must be at most 10'),
  foodQualityRating: Yup.number()
    .required('Food quality rating is required')
    .min(1, 'Food quality rating must be at least 1')
    .max(10, 'Food quality rating must be at most 10'),
  comments: Yup.string().required('Please provide your feedback'),
  date: Yup.date().required('Date of experience is required'),
  orderPlacement: Yup.string().required('Order placement is required'),
  agreeTerms: Yup.bool().oneOf(
    [true],
    'You must agree to the terms and conditions'
  ),
});

const FeedbackForm = ({ onFormSubmit }) => {
  // Function to handle form submission
  const handleSubmit = useCallback(
    async (values, { setSubmitting, resetForm }) => {
      try {
        await submitFeedback(values);

        // Reset form after submission
        resetForm();
        onFormSubmit(); // Call the onFormSubmit prop when the form is successfully submitted
        setSubmitting(false);
      } catch (error) {
        console.error('Error submitting feedback:', error);
        setSubmitting(false);
        toast.error(
          'An error occurred while submitting the form. Please try again.'
        );
      }
    },

    [onFormSubmit]
  );

  return (
    <Formik
      initialValues={{
        serviceRating: '',
        foodQualityRating: '',
        comments: '',
        date: '',
        orderPlacement: '',
        problem: '',
        firstName: '',
        surname: '',
        email: '',
        phone: '',
        agreeTerms: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue, values, errors, touched }) => (
        <Form className='space-y-4 ref={formRef} '>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className='text-sm md:text-lg text-white font-bold'>
              Service Rating:
            </label>
            <NumberScale
              onRatingChange={(rating) =>
                setFieldValue('serviceRating', rating)
              }
            />
            {errors.serviceRating && touched.serviceRating && (
              <p className='text-red-500 text-sm'>{errors.serviceRating}</p>
            )}
          </motion.div>
          <hr className='my-6 border-gray-200' />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className='text-sm  md:text-lg text-white font-bold'>
              Food Quality Rating:
            </label>
            <NumberScale
              onRatingChange={(rating) =>
                setFieldValue('foodQualityRating', rating)
              }
            />
            {errors.foodQualityRating && touched.foodQualityRating && (
              <p className='text-red-500 text-sm'>{errors.foodQualityRating}</p>
            )}
          </motion.div>
          <hr className='my-6 border-gray-200' />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className='md:text-lg text-sm text-white font-bold'>
              Date of Experience:
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <DatePickerInput
              selectedDate={values.date}
              onChange={(date) => setFieldValue('date', date)}
            />
            {errors.date && touched.date && (
              <p className='text-red-500 text-sm'>{errors.date}</p>
            )}
          </motion.div>

          <hr className='my-6 border-gray-200' />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <OrderPlacementInput
              orderPlacement={values.orderPlacement}
              onChange={(placement) =>
                setFieldValue('orderPlacement', placement)
              }
            />
            {errors.orderPlacement && touched.orderPlacement && (
              <p className='text-red-500 text-sm'>{errors.orderPlacement}</p>
            )}
            <hr className='my-6 border-gray-200' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Use the ProblemSelect component */}
            <ProblemSelect
              selectedProblem={values.problem}
              onChange={(problem) => setFieldValue('problem', problem)}
            />
            {errors.problem && touched.problem && (
              <p className='text-red-500 text-sm'>{errors.problem}</p>
            )}
            <hr className='my-6 border-gray-200' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className='space-y-4'>
              <label className='text-sm  md:text-lg text-white font-bold'>
                What should we improve:
              </label>
              <Field name='comments'>
                {({ field }) => (
                  <textarea
                    {...field}
                    value={field.value || ''}
                    onChange={field.onChange}
                    className='border px-2 py-1 w-full rounded h-32 hover:ring-4 ring-mustard text-gray-700'
                    placeholder='Please tell us here'
                  />
                )}
              </Field>
              {errors.comments && touched.comments && (
                <p className='text-red-500 text-sm'>{errors.comments}</p>
              )}
            </div>
          </motion.div>
          <hr className='my-6 border-gray-200' />

          {/* First Name and Surname */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className='space-y-4 sm:flex sm:space-x-4 sm:space-y-0'
          >
            <div className='flex items-center'>
              <FiUser className='text-gray-500 mr-2' />
              <div className='flex-grow'>
                <Field name='firstName'>
                  {({ field }) => (
                    <TextInput
                      {...field}
                      placeholder='First Name'
                      className={`border px-2 py-1 w-full rounded ${
                        errors.firstName && touched.firstName
                          ? 'border-red-500'
                          : ''
                      }`}
                    />
                  )}
                </Field>
                {errors.firstName && touched.firstName && (
                  <p className='text-red-500 text-sm'>{errors.firstName}</p>
                )}
              </div>
            </div>
            <div className='flex items-center'>
              <FiUser className='text-gray-500 mr-2' />
              <div className='flex-grow'>
                <Field name='surname'>
                  {({ field }) => (
                    <TextInput
                      {...field}
                      placeholder='Surname'
                      className={`border px-2 py-1 w-full rounded ${
                        errors.surname && touched.surname
                          ? 'border-red-500'
                          : ''
                      }`}
                    />
                  )}
                </Field>
                {errors.surname && touched.surname && (
                  <p className='text-red-500 text-sm'>{errors.surname}</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <Field name='email'>
            {({ field }) => (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className='flex items-center'>
                  <FiMail className='text-gray-500 mr-2' />
                  <div className='flex-grow'>
                    <TextInput
                      {...field}
                      type='email'
                      name='email'
                      placeholder='Email Address'
                      className='border px-2 py-1 w-full rounded'
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </Field>

          {/* Phone */}
          <Field name='phone'>
            {({ field }) => (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className='flex items-center'>
                  <FiPhone className='text-gray-500 mr-2' />
                  <div className='flex-grow'>
                    <TextInput
                      {...field}
                      type='tel'
                      name='phone'
                      placeholder='Phone Number'
                      pattern='[0-9]*'
                      className='border px-2 py-1 w-full rounded'
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </Field>

          <hr className='my-6 border-gray-200' />

          <motion.div
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Link to show Privacy Policy modal */}
            <div className='flex items-center space-x-2'>
              <Field type='checkbox' name='agreeTerms'>
                {({ field }) => (
                  <input
                    type='checkbox'
                    {...field}
                    className='w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-0'
                  />
                )}
              </Field>
              <label className='text-white text-justify md:text-lg text-sm'>
                By submitting this survey, you agree to the{' '}
                <Link to='/privacy-policy' className='underline text-mustard'>
                  Terms and Conditions
                </Link>{' '}
                of the use.
              </label>
            </div>
            {errors.agreeTerms && touched.agreeTerms && (
              <p className='text-red-500 text-sm'>{errors.agreeTerms}</p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SubmitButton disabled={isSubmitting} onSubmit={handleSubmit} />
          </motion.div>
          {/* Image Section with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} // Adjust animation duration as needed
          >
            <div className='flex flex-col items-center space-y-2'>
              <img
                src='/path-to-your-logo.png' // Replace with the actual path to your logo image
                alt='Logo'
                className='h-12 w-12 object-contain'
              />
              <p className='text-white  md:text-lg text-sm text-center'>
                All rights reserved © Powered by Pasta Express Limited
              </p>
            </div>
          </motion.div>
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackForm;
