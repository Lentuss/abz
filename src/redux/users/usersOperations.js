import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsers = createAsyncThunk('/getUsers', async (page) => {
    const token = localStorage.getItem('token')
  try {
      const { data } = await axios.get('/users', {
          params: {
              page: page,
              count: 6
          },
          headers: {'Token': token }
      });
    return data;
  } catch (error) {
      console.log(error.message)
  }
});

