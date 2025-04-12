import { useNavigate } from "react-router-dom";

const useGoToMovieDetails = () => {
  const navigate = useNavigate();

  const goToMovieDetails = (movie) => {
    navigate(`/movie/${movie?.imdbID}`, {
      state: { movie }
    });
  };

  return goToMovieDetails;
};

export default useGoToMovieDetails;
