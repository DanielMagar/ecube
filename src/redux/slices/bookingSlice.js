import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    movieId: null,
    selectedSeats: [],
    user: {},
  },
  reducers: {
    setBooking(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setBooking } = bookingSlice.actions;
export default bookingSlice.reducer;