import { createSlice } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

import {
  register,
  login,
  logout,
  refreshUser,
//   updateTheme,
  // updateUserData,
} from './authOperations';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.user.email = '';
        state.user.name = '';
        state.token = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
    //   .addCase(updateTheme.fulfilled, (state, { payload }) => {
    //     state.user.theme = payload.theme;
    //   })
      // .addCase(updateUserData.fulfilled, (state, { payload }) => {
      //   state.user.name = payload.name;
      //   state.user.email = payload.email;
      //   state.user.theme = payload.theme;
      //   state.user.avatarURL = payload.avatarURL;
      //   state.isRefreshing = false;
      //   state.error = null;
      //   toast.success('Changes accepted!');
      // })
      // .addCase(updateUserData.pending, state => {
      //   state.isRefreshing = true;
      // })
      // .addCase(updateUserData.rejected, (state, { payload }) => {
      //   state.isRefreshing = false;
      //   state.error = payload;
      //   toast.error(payload);
      // })
});

export const authReducer = authSlice.reducer;