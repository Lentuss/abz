import { createSlice } from '@reduxjs/toolkit';
import { register } from './registerOperations';

const initialState = {
  user: { name: null, email: null, phone: null, position: null, photo: null },
  token: null,
  isLoggedIn: false,
};

const registerSlice = createSlice({
  name: 'registerSlice',
  initialState,
  reducers: {
    [register.pending]: (state, action) => state,
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, action) => action.payload,
  },
});

export default registerSlice.reducer;
