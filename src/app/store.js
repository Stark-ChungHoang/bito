import { configureStore } from '@reduxjs/toolkit';
import disneyReducer from '../features/disney'
import userReducer from "../features/user"
export const store = configureStore({
  reducer: {
    disney:disneyReducer,
    user : userReducer 
  },
});
