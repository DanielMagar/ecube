import React from "react";

import Latest from "./Latest";
import Header from "../resuable/Header";
import Navbar from "../resuable/Navbar";
import Slider from "../resuable/Slider";
import RecommendedMovies from "./RecommendedMovies";
import { Footer } from "../resuable/Footer";

const HomePage = () => {


  return (
   <div>
    <Header/>
    <Navbar />
    <Slider/>
    <RecommendedMovies/>
    <Footer/>
   </div>
  );
};

export default HomePage;
