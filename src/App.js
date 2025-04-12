import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import HomePage from './components/HomePage';
import Latest from './components/Latest';
import UpcomingMovies from './components/UpcomingMovies'
import Events from './components/Events';
import MovieDetails from './components/MovieDetails';
import FinalTicketPage from './components/FinalTicketPage';
import FilteredMovies from './components/FilteredMovies';

function App() {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/ticket" element={<FinalTicketPage />} />
        <Route path="/upcoming" element={<UpcomingMovies/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/searchResult" element={<FilteredMovies/>} />
      </Routes>
    </Router>
  );
}
export default App;