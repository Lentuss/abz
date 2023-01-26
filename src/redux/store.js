import { configureStore, combineReducers } from '@reduxjs/toolkit';
import registerSlice from './register/registerSlice';
import usersSlice from './users/usersSlice';

const usersData = combineReducers({ registerSlice, usersSlice } );

export const store = configureStore({
  reducer: {
    usersData,
  },
});