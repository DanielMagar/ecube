import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { Link } from "react-router-dom";
import { fetchAllMovies } from "../redux/slices/moviesSlice";
import { useNavigate } from "react-router-dom";
import { setSearchTerm, setSearchResults, setSearchTermValue } from "../redux/slices/moviesSlice";
import Notification from "./Notification";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { combined, searchTerm, searchTermValue } = useSelector((state) => state.movies); // get from Redux
  const [alert, setAlert] = useState({ message: "", type: "" });
console.log(combined)
  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);
  const handleSearch = (term) => {
    if(term && searchTermValue === "") {
      showAlert("Please enter a movie name", "warning");
      return;
    }
    dispatch(setSearchTerm(term));
    dispatch(setSearchTermValue(term));
    const filtered = combined?.filter((movie) =>
      movie?.Title?.toLowerCase().includes(term?.toLowerCase())
    );
    console.log(filtered)
    dispatch(setSearchResults(filtered));
    if (filtered?.length > 0) {
      setTimeout(() => {
        navigate("/searchResult");
      }, 0); // Let input event finish first
      dispatch(setSearchTermValue(""));
    }
    else{
      showAlert("No Movies Found", "warning");
    }
  };
  const showAlert = (message, type = "warning") => {
    setAlert({ message, type });
    setTimeout(() => setAlert({ message: "", type: "" }), 3000); // auto-hide after 3s
  };
  return (
    <div className="movie-header-wrapper">
      <Link
        to="/"
        className="text-xl font-bold text-white text-decoration-none"
      >
        🎬 E-Cube
      </Link>
      <div className="d-flex gap-3 align-items-center"> 
        <input
          type="text"
          placeholder="Search Movies..."
          className="search-input"
          value={searchTermValue}
          onChange={(e) => {
            dispatch(setSearchTermValue(e.target.value));
            dispatch(setSearchTerm(e.target.value));
          }}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleSearch(searchTerm)}
        >
          Search
        </button>
      </div>
      {alert.message && (
        <Notification message={alert.message} type="warning" setAlert={setAlert}/>
      )}
    </div>
  );
};

export default Header;
