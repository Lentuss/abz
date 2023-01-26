import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
  
axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const register = createAsyncThunk('/register', async (formData) => {
  const token = localStorage.getItem('token')
  console.log('register')
  try {
    const { data } = await axios.post('/users', formData, {
      headers: { 'Content-Type': 'multipart/form-data', 'Token': token }
    });
    return data;
  } catch (error) {
      console.log(error.message)
  }
});

