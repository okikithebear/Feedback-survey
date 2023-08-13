const mongoose = require('mongoose');
const Feedback = require('./feedbackModel'); // Adjust the path to your feedback model file

exports.handler = async (event) => {
  try {
    const { httpMethod, body } = event;

    // Connect to your MongoDB database
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (httpMethod === 'POST') {
      const feedbackData = JSON.parse(body);
      const newFeedback = new Feedback(feedbackData);
      await newFeedback.save();
      return {
        statusCode: 201,
        body: JSON.stringify({ message: 'Feedback submitted successfully.' }),
      };
    } else if (httpMethod === 'GET') {
      const allFeedback = await Feedback.find();
      return {
        statusCode: 200,
        body: JSON.stringify(allFeedback),
      };
    } else {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method not allowed.' }),
      };
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong.' }),
    };
  } finally {
    // Disconnect from the database after the function execution
    await mongoose.disconnect();
  }
};
