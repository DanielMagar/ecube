import React from "react";
import Navbar from "../resuable/Navbar";
import { Footer } from "../resuable/Footer";
import { useParams, useLocation } from "react-router-dom";
import "./MovieDetails.css";
import Header from "../resuable/Header";

const MovieDetails = ({ movie }) => {
  const { id } = useParams();
  const location = useLocation();
  const {
    Poster,
    Title,
    imdbRating,
    Genre,
    Released,
    Director,
    Plot,
    Runtime,
  } = location.state.movie || {};
  console.log(location);
  return (
    <>
      <Header />
      <Navbar />

      <div className="movie-details-wrapper">
        <div className="movie-details-page">
          <div
            className="movie-img"
            style={{
              backgroundImage: `url(${
                Poster !== "N/A" ? Poster : "/fallback-image.jpg"
              })`,
            }}
          ></div>
          <div className="movie-description">
            <div className="movie-name-date">
              <div>
                <strong>Movie Name: </strong>
                {Title}
              </div>
              <div>
                <strong>Released Date: </strong>
                {Released}
              </div>
            </div>
            <div className="movie-duration">
              <strong>Movie Duration: </strong>
              {Runtime}
            </div>
            <div className="movie-rating">
              <strong>IMDB Rating:</strong> {imdbRating}
            </div>
            <button type="button" className="btn btn-primary w-25">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
