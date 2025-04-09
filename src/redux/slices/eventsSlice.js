import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await fetch('/data/events.json'); // or your mock API URL
  const data = await response.json();
  return data;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    eventsList: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.eventsList = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default eventsSlice.reducer;
