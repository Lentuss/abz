import { createSlice } from '@reduxjs/toolkit';
import { register } from './registerOperations';

const initialState = {
  user: { name: null, email: null, phone: null, positionId: null, photo: null },
  isLoggedIn: false,
  isLoading: false
};

const registerSlice = createSlice({
  name: 'registerSlice',
  initialState,
  extraReducers: {
    [register.pending] (state, action) {state.isLoading = true;},
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected]: (state, action) => action.payload,
  },
});

export default registerSlice.reducer;
