import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MovieDetails from './pages/MovieDetails';
// import BookingPage from './pages/BookingPage';
// import FinalTicketPage from './pages/FinalTicketPage';
// import UpcomingMovies from './pages/UpcomingMovies';
// import Events from './pages/Events';
import HomePage from './components/HomePage';
import Latest from './components/Latest';
import UpcomingMovies from './components/UpcomingMovies'
import Events from './components/Events';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        {/* <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/ticket" element={<FinalTicketPage />} /> */}
        <Route path="/upcoming" element={<UpcomingMovies/>} />
        <Route path="/events" element={<Events/>} />
      </Routes>
    </Router>
  );
}
export default App;