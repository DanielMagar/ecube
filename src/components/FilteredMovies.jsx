import React from "react";
import Header from "../resuable/Header";
import Navbar from "../resuable/Navbar";
import { Footer } from "../resuable/Footer";
import { useSelector } from "react-redux";
import useGoToTicketBooking from "../Hooks/useGoToTicketBooking";
import useGoToMovieDetails from "../Hooks/useGoToMovieDetail";

const FilteredMovies = () => {
  const { searchTerm, searchResults } = useSelector((state) => state.movies);
  const goToTicketBooking = useGoToTicketBooking();
  const goToMovieDetail = useGoToMovieDetails()
  let movieText = searchTerm?.length > 0 && searchTerm?.length === 1 ? "movie" : searchTerm?.length > 1 ? "movies" : "No Movies Found";
  return (
    <div>
      <Header />
      <Navbar />
      <div className="filteredMoviesContainer">
        <div className="mb-4 d-flex gap-3 align-items-center justify-content-center">    
        <h2 className="text-2xl font-bold text-center">
          Movies Search result for {searchTerm}
        </h2>
        <div>(Showing {searchResults?.length} {movieText})</div>
        </div>
        {searchResults?.length > 0 ? (
          searchResults?.map((movie, index) => (
            <div key={index} className="filteredMoviesCard d-flex gap-3 align-items-center justify-content-center">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={
                    movie?.Poster !== "N/A"
                      ? movie?.Poster
                      : "/fallback-image.jpg"
                  }
                  alt="Movie Poster"
                  className="card-img-top"
                  onClick={() => {
                    // Navigate to movie details page
                    goToMovieDetail(movie)
                    // Navigate(`/movie/${movie?.imdbID}`);
                  }
                  }
                />
                <div className="card-body">
                  <h5 className="card-title">{movie?.Title}</h5>
                  <p className="card-text">{movie?.Genre}</p>
                </div>
                <button
                  type="button"
                  style={{ margin: "0 10px 10px 10px" }}
                  onClick={() => {
                    goToTicketBooking(movie);
                  }}
                  className="btn btn-primary"
                >
                  Book
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No Movies Found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FilteredMovies;
