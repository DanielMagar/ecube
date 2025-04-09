import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY =  '778180c6';

const movies = ['Dune', 'Oppenheimer', 'Barbie', 'Killers of the Flower Moon', 'John Wick'];

export const fetchLatestMovies = createAsyncThunk('movies/fetchLatest', async () => {
  const requests = await Promise.all(
    movies.map((title) =>
      axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
    )
  );

  return requests.map((res) => res.data);
});
export const fetchRecommendedMovies = createAsyncThunk('movies/fetchRecommended', async () => {
  const recommendedTitles = ['Inception', 'Interstellar', 'The Matrix', 'Tenet', 'The Prestige'];
  const responses = await Promise.all(
    recommendedTitles.map((title) =>
      axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
    )
  );
  return responses.map((res) => res.data);
});

export const fetchUpcomingMovies = createAsyncThunk('movies/fetchUpcoming', async () => {
  const recommendedUpcomingTitles = ['Mission: Impossible - Dead Reckoning', 'The Marvels', 'Wonka', 'Napoleon', 'Dune: Part Two'];
  const responses = await Promise.all(
    recommendedUpcomingTitles.map((title) =>
      axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
    )
  );
  return responses.map((res) => res.data);
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchDetails', async (id) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
});
const movieSlice = createSlice({
    name: 'movies',
    initialState: {
      latest: [],
      upcoming: [],
      recommended: [],
      details: {},
      loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchLatestMovies.fulfilled, (state, action) => {
          state.latest = action.payload;
        })
        .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
          state.upcoming = action.payload;
        })
        .addCase(fetchMovieDetails.fulfilled, (state, action) => {
          state.details = action.payload;
        })
        .addCase(fetchRecommendedMovies.fulfilled, (state, action) => {
          state.recommended = action.payload;
        });
    },
  });
  export default movieSlice.reducer;