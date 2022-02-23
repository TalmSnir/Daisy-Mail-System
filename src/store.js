import { configureStore } from '@reduxjs/toolkit';
import packagesReducer from './reducers/packagesReducer';
export const store = configureStore({
  reducer: {
    packages: packagesReducer,
  },
});
