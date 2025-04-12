import React from "react";
import Navbar from "../resuable/Navbar";
import { Footer } from "../resuable/Footer";
import { useLocation, useParams } from "react-router-dom";
import "./BookingPage.css";
import useGoToFinalTicket from "../Hooks/useGoToFinalTicket";
import Header from "../resuable/Header";

const BookingPage = () => {
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
  const goToFinalTicket = useGoToFinalTicket();
  const ticketDetails = {
    movieName: Title,
    movieGenre: Genre,
    moviedReleased: Released,
    director: Director,
    plot: Plot,
    runtime: Runtime,
    qrScan: Poster,
    rating: imdbRating,
  };
  return (
    <div>
      <Header />
      <Navbar />
      <div className="booking-page">
        <h1 className="text-2xl font-bold mb-4 text-center">Booking Page</h1>
        <div className="container p-2 border mt-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={Poster !== "N/A" ? Poster : "/fallback-image.jpg"}
              alt="Movie Poster"
              className="card-img-top"
            />
            {/* <div className="card-body">
              <h5 className="card-title">Movie Title</h5>
              <p className="card-text">Genre</p>
            </div> */}
          </div>
          <div>
            <div className="d-flex gap-2 align-item-center">
              <strong>Date</strong>
              <span className="text-secondary">: {Released}</span>
            </div>
            <div className="d-flex gap-2 align-item-center">
              <strong>Available Show Timing:</strong>
              <span className="text-secondary">:{Runtime}</span>
            </div>
            <div className="d-flex gap-2 align-item-center flex-column">
              <strong className="p-0">
                Please select your seats and confirm your booking.
              </strong>
              <div className="booking-form d-flex gap-2">
                <div>
                  <label htmlFor="seats">Select Seats:</label>
                  <select className="p-2 mx-2" id="seats" name="seats">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    {/* Add more options as needed */}
                  </select>
                  <div>
                    <button
                      type="submit"
                      onClick={() => goToFinalTicket(ticketDetails)}
                      className="btn btn-primary mt-4"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
