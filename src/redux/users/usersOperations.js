import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsers = createAsyncThunk('/getUsers', async () => {
  try {
      const { data } = await axios.get('/users', {
          params: {
              page: 1,
              count: 6
          },
          headers: {
            //   'Token': `${localStorage.getItem('token')}`
              'Token': `eyJpdiI6IjdoSU5VZFZ1NXppZGZRc2w1aTJCU2c9PSIsInZhbHVlIjoiSVwvWDIyRlU2NDJHMEtocVA0VUF2eUx5ZjhOM21iWUU1Y2I2SXRrXC9xV0tvbW1UQ0pSS1wvTlErWkRTNzlBWUhyemRxZ2tsSzFFM0Q2VUZMT2NUalptT2c9PSIsIm1hYyI6IjdkNGYyOGMzMmNiZmU1NDdkODQ5Yzc2YjIwMjcwNWIyODVmZDBlYzE2MzJmMmE3OGRiZGU0M2E3ZDczZGY2NjUifQ==`
          }
      });
    // token.set(data.token);/////////////////////////////////////
    // if (data.token) {
    //     console.log('Hoooray! Your hands grow from the right place')
    //   localStorage.setItem('token', data.token);
    // }
    return data;
  } catch (error) {
      console.log(error.message)
  }
});

