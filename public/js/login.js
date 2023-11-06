/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts.js';

export const login = async (email, password) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (response.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });

    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    showAlert('error', 'Error logging out! Try again.');
  }
};
