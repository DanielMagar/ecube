import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestMovies } from "../redux/slices/moviesSlice";
import { Link } from "react-router-dom";
import "./Latest.css";
import Header from "../resuable/Header";
import Navbar from "../resuable/Navbar";
import { Footer } from "../resuable/Footer";
import useGoToMovieDetails from "../Hooks/useGoToMovieDetail";
import useGoToTicketBooking from "../Hooks/useGoToTicketBooking";

const Latest = () => {
  const dispatch = useDispatch();
  const { latest } = useSelector((state) => state.movies);
  const goToMovieDetails = useGoToMovieDetails();
  const goToTicketBooking= useGoToTicketBooking();

  useEffect(() => {
    dispatch(fetchLatestMovies());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="latest-movies-wrapper">
        <h1 className="text-2xl font-bold mb-4 text-center">Latest Movies</h1>       
        <div className="d-flex gap-3 container mt-3">
      {latest?.slice(0,4)?.map((movie, index) => (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/fallback-image.jpg"}
            alt={movie.Title}
            className="card-img-top"
            onClick={() => {
              // Navigate to movie details page
              goToMovieDetails(movie)
              // Navigate(`/movie/${movie?.imdbID}`);
            }
          }
          />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Genre}</p>
          </div>
          <button type="button" style={{ margin: "0 10px 10px 10px"}} onClick={()=>goToTicketBooking(movie)} className="btn btn-primary">Book</button>
        </div>
      ))}
     
    </div>
      </div>
        <Footer/>
    </div>
  );
};

export default Latest;
