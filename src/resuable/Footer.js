import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>🎬 E-Cube</h1>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/latest">Latest</Link>
          <Link to="/upcoming">Upcoming</Link>
          <Link to="/events">Events</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 E-Cube. All rights reserved.</p>
      </div>
    </div>
  );
};
