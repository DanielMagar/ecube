import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div>
        <Link to="/latest" className="btn btn-primary hover:text-yellow-400 font-bold text-decoration-none text-white">
          Latest Movies
        </Link>
      </div>
      <div>
        <Link to="/upcoming" className="btn btn-primary hover:text-yellow-400 font-bold text-decoration-none text-white">
          Upcoming
        </Link>
      </div>
      <div>
        <Link to="/events" className="btn btn-primary hover:text-yellow-400 font-bold text-decoration-none text-white">
          Events
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
