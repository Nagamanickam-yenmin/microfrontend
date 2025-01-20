import { configureStore } from '@reduxjs/toolkit'; 
import  loginSlice from './slice/auth/login';

export const store = configureStore({
  reducer: {
    loginSlice,
  },
});



export default store;
