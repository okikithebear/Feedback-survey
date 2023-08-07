import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <div className='text-center'>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-3xl font-bold mb-4 text-red-600'
      >
        Privacy Policy
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-gray-400 text-justify max-w-lg mx-auto mb-6'
      >
        At Chef Kabs, we are committed to protecting your privacy and ensuring
        the security of your personal information. This Privacy Policy outlines
        how we collect, use, disclose, and protect your data when you interact
        with our Customer Satisfaction Survey and related services. By using our
        services, you consent to the practices described in this policy.
        <br />
        <br />
        <strong>1. Information Collection and Use:</strong> We may collect
        various types of information from you when you use our Customer
        Satisfaction Survey, including but not limited to:
        <ul className='list-disc list-inside ml-4'>
          <li>
            Contact Information: Your name, email address, and phone number.
          </li>
          <li>
            Survey Responses: Ratings, comments, and feedback you provide on our
            services.
          </li>
          <li>
            Device and Usage Information: IP address, browser type, operating
            system, and other technical information.
          </li>
        </ul>
        We use this information to improve our services, understand customer
        preferences, and respond to inquiries and feedback.
        <br />
        <br />
        <strong>2. Data Security:</strong> We take data security seriously and
        implement appropriate measures to safeguard your information. Our
        systems are protected using industry-standard encryption and security
        protocols.
        <br />
        <br />
        <strong>3. Data Retention:</strong> We retain your personal information
        for as long as necessary to fulfill the purposes outlined in this
        Privacy Policy unless a longer retention period is required or permitted
        by law.
        <br />
        <br />
        <strong>4. Third-Party Service Providers:</strong> We may use
        third-party service providers to assist in delivering our services.
        These providers have access to your information to perform specific
        tasks on our behalf and are obligated not to disclose or use it for any
        other purpose.
        <br />
        <br />
        <strong>5. Cookies and Tracking Technologies:</strong> We may use
        cookies and similar tracking technologies to enhance your experience on
        our website and gather data about how our services are used. You can
        control the use of cookies through your browser settings.
        <br />
        <br />
        <strong>6. Children's Privacy:</strong> Our services are not intended
        for children under the age of 13. We do not knowingly collect personal
        information from individuals under 13 years of age.
        <br />
        <br />
        <strong>7. Changes to this Privacy Policy:</strong> We may update this
        Privacy Policy from time to time to reflect changes in our practices or
        for other operational, legal, or regulatory reasons. We will notify you
        of any material changes through prominent notices on our website or by
        other means.
        <br />
        <br />
        By using our Customer Satisfaction Survey and related services, you
        agree to the terms of this Privacy Policy. Thank you for trusting Chef
        Kabs with your feedback and personal information.
      </motion.p>
    </div>
  );
};

export default PrivacyPolicyPage;
