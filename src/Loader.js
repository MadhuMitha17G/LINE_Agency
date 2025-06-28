// src/Loader.js
import React from "react";
import "./Loader.css";
import loadingGif from "./assets/Loading-animation.gif"; // adjust if your path differs

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={loadingGif} alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Loader;
