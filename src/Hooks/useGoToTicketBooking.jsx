import { useNavigate } from "react-router-dom";

const useGoToTicketBooking= () => {
  const navigate = useNavigate();

  const goToMovieDetails = (movie) => {
    navigate(`/booking/${movie?.imdbID}`, {
      state: { movie }
    });
  };

  return goToMovieDetails;
};

export default useGoToTicketBooking;