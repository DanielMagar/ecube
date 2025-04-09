import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div>
        <Link to="/latest" className="hover:text-yellow-400">
          Latest Movies
        </Link>
      </div>
      <div>
        <Link to="/upcoming" className="hover:text-yellow-400">
          Upcoming
        </Link>
      </div>
      <div>
        <Link to="/events" className="hover:text-yellow-400">
          Events
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
