import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './usersOperations';

const initialState = {
  users: [], totalPages: 1
};

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  extraReducers: {
    [getUsers.pending](state, action) {state.isLoading = true;},
    [getUsers.fulfilled](state, action) {
      state.users = action.payload.users;
      state.totalPages = action.payload.total_pages;
      state.isLoading = false;
      console.log(action.payload)
    },
    [getUsers.rejected]: (state, action) => action.payload,
  },
});

export default usersSlice.reducer;
