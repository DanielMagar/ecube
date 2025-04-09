import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendedMovies } from "../redux/slices/moviesSlice";
import { useNavigate } from 'react-router-dom';

const RecommendedMovies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecommendedMovies());
  }, [dispatch]);
  const { recommended } = useSelector((state) => state.movies);
  const goToMovieDetails = (movie) => {
    navigate(`/movie/${movie?.imdbID}`, {
      state: { movie }
    });
  };
  return (
    <div className="container">
      <h1 className="text-center text-2xl font-bold mt-3">Recommended Movies</h1>
    <div className="d-flex gap-3 container mt-3">
      {recommended?.map((movie, index) => (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/fallback-image.jpg"}
            alt={movie.Title}
            style={{cursor: "pointer"}}
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
          <button type="button" style={{ margin: "0 10px 10px 10px"}} className="btn btn-primary">Book</button>
        </div>
      ))}
     
    </div>
    </div>
  );
};

export default RecommendedMovies;
