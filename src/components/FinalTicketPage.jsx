import React from "react";
import Navbar from "../resuable/Navbar";
import { Footer } from "../resuable/Footer";
import { useLocation } from "react-router-dom";
import Header from "../resuable/Header";

const FinalTicketPage = () => {
  const location = useLocation();
  const { ticketDetails } = location.state || {};
  const {
    movieName,
    movieGenre,
    moviedReleased,
    director,
    plot,
    runtime,
    qrScan,
    rating,
  } = ticketDetails || {};
  return (
    <>
      <Header />
      <Navbar />
      <div className="finalTicketPage d-flex align-items-center pb-5">
      <div className="ticket-header mt-4">
        <h2 className="text-center">Booking Confirmation</h2>
        <div className="ticket-details d-flex flex-column align-items-center mt-4">
          <div className="ticket-header">
            <h2>Your Ticket Details</h2>
          </div>
          <div className="border p-3 d-flex gap-2 align-item-center justify-content-center" style={{ width: "80%" }}>
            <div
              style={{
                backgroundImage: `url(${qrScan})`,
                backgroundSize: "cover",
                width: "200px",
                height: "200px",
              }}
              className="ticket-image"
            >
              
            </div>
            <div>
              <div className="ticket-info-item">
                <strong>Movie Name:</strong> {movieName}
              </div>
              <strong>Plot:</strong> {plot}
              <div className="ticket-info-item">
                <strong>Genre:</strong> {movieGenre}
              </div>
              <div className="ticket-info-item">
                <strong>Released:</strong> {moviedReleased}
              </div>
              <div className="ticket-info-item">
                <strong>Director:</strong> {director}
              </div>
              
              <div className="ticket-info-item">
                <strong>Runtime:</strong> {runtime}
              </div>
              <div className="ticket-info-item">
                <strong>Rating:</strong> {rating}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default FinalTicketPage;
