import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './usersOperations';

const initialState = {
  user: { name: null, email: null, phone: null, positionId: null, photo: null },
  token: null,
  isLoggedIn: false,
};

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    [getUsers.pending]: (state, action) => state,
    [getUsers.fulfilled](state, action) {
      state.users = action.payload.users;
    },
    [getUsers.rejected]: (state, action) => action.payload,
  },
});

export default usersSlice.reducer;
