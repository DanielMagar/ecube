import { useNavigate } from "react-router-dom";

const useGoToFinalTicket = () => {
  const navigate = useNavigate();

  const goToMovieDetails = (ticketDetails) => {
    navigate(`/ticket/`, {
      state: { ticketDetails }
    });
  };

  return goToMovieDetails;
};

export default useGoToFinalTicket;