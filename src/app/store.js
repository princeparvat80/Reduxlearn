import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import RootReducers from '../ReduxStore/RootReducers'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    RootReducers : RootReducers,
  },
});
