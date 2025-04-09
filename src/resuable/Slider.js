import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestMovies } from "../redux/slices/moviesSlice";
const Slider = () => {
    const dispatch = useDispatch();
    const { latest } = useSelector((state) => state.movies);
  
    useEffect(() => {
      dispatch(fetchLatestMovies());
    }, [dispatch]);
  return (
    <div className="container-fluid">
    <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {latest.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#movieCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {latest.map((movie, index) => (
          <div key={movie.imdbID} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : '/fallback-image.jpg'}
              className="d-block w-100"
              alt={movie.Title}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-2 rounded">
              <h5>{movie.Title}</h5>
              <p>{movie.Genre}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  );
};

export default Slider;
