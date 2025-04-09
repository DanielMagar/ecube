import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/moviesSlice';
import bookingReducer from './slices/bookingSlice';
import eventsReducer from './slices/eventsSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    booking: bookingReducer,
    events: eventsReducer
  },
});

export default store;