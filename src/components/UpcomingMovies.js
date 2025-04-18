import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies } from "../redux/slices/moviesSlice";
import Header from "../resuable/Header";
import Navbar from "../resuable/Navbar";
import "./UpcomingMovies.css";
import { Footer } from "../resuable/Footer";
import useGoToMovieDetails from "../Hooks/useGoToMovieDetail";
import useGoToTicketBooking from "../Hooks/useGoToTicketBooking";


const UpcomingMovies = () => {
  const dispatch = useDispatch();
  const goToMovieDetails = useGoToMovieDetails();
  const goToTicketBooking= useGoToTicketBooking();
  const { upcoming } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Upcoming Movies</h1>
        <div className="d-flex gap-3 container mt-3">
          {upcoming?.map((movie, index) => (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img
                src={
                  movie.Poster !== "N/A" ? movie.Poster : "/fallback-image.jpg"
                }
                alt={movie.Title}
                className="card-img-top"
                onClick={() => {
                  // Navigate to movie details page
                  goToMovieDetails(movie)
                  // Navigate(`/movie/${movie?.imdbID}`);
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Genre}</p>
              </div>
              <button
                type="button"
                style={{ margin: "0 10px 10px 10px" }}
                className="btn btn-primary"
                onClick={()=> goToTicketBooking(movie)}
              >
                Book
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpcomingMovies;
