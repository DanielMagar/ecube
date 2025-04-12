import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "778180c6";

const latestTitles = [
  "Dune",
  "Oppenheimer",
  "Barbie",
  "Killers of the Flower Moon",
  "John Wick",
];
const recommendedTitles = [
  "Inception",
  "Interstellar",
  "The Matrix",
  "Tenet",
  "The Prestige",
];
const upcomingTitles = [
  "Mission: Impossible - Dead Reckoning",
  "The Marvels",
  "Wonka",
  "Napoleon",
  "Dune: Part Two",
];

// ✅ Individual async thunks (still usable if needed)
export const fetchLatestMovies = createAsyncThunk(
  "movies/fetchLatest",
  async () => {
    const responses = await Promise.all(
      latestTitles.map((title) =>
        axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(
            title
          )}`
        )
      )
    );
    return responses.map((res) => res.data);
  }
);

export const fetchRecommendedMovies = createAsyncThunk(
  "movies/fetchRecommended",
  async () => {
    const responses = await Promise.all(
      recommendedTitles.map((title) =>
        axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(
            title
          )}`
        )
      )
    );
    return responses.map((res) => res.data);
  }
);

export const fetchUpcomingMovies = createAsyncThunk(
  "movies/fetchUpcoming",
  async () => {
    const responses = await Promise.all(
      upcomingTitles.map((title) =>
        axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(
            title
          )}`
        )
      )
    );
    return responses.map((res) => res.data);
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchDetails",
  async (id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return res.data;
  }
);

// ✅ New thunk to fetch all movies together
export const fetchAllMovies = createAsyncThunk("movies/fetchAll", async () => {
  const allTitles = [...latestTitles, ...recommendedTitles, ...upcomingTitles];

  const responses = await Promise.all(
    allTitles.map((title) =>
      axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(
          title
        )}`
      )
    )
  );
  console.log(
    "all movies list",
    responses.map((res) => res.data)
  );
  return responses.map((res) => res.data);
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    latest: [],
    recommended: [],
    upcoming: [],
    details: {},
    combined: [], // For global search
    loading: false,
    searchTerm: "",
    searchTermValue: "",
    searchResults: [],
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
    setSearchTermValue(state, action) {
     state.searchTermValue = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestMovies.fulfilled, (state, action) => {
        state.latest = action.payload;
      })
      .addCase(fetchRecommendedMovies.fulfilled, (state, action) => {
        state.recommended = action.payload;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.upcoming = action.payload;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.details = action.payload;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.combined = action.payload;
      });
  },
});

export default movieSlice.reducer;
export const { setSearchTerm, setSearchResults, setSearchTermValue } = movieSlice.actions;

