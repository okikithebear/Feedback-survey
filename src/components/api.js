import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Update this URL to match your backend server URL

export const submitFeedback = async (feedbackData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/feedback`,
      feedbackData
    );
    return response.data;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw new Error('Something went wrong.');
  }
};

export const fetchFeedback = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/feedback`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw new Error('Something went wrong.');
  }
};
