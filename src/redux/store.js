import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tripsReducer from './slices/tripsSlice';
import galleryReducer from './slices/gallerySlice';

// Create and configure the Redux store
const store = configureStore({
  reducer: {
    user: userReducer,
    trips: tripsReducer,
    gallery: galleryReducer,
  },
});

export default store;
