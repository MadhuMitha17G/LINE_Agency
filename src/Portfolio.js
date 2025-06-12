import React, { useEffect, useState, useRef } from "react";
import "./Portfolio.css";
import mahaveers from "./assets/Mahaveers.jpeg";
import urvi from "./assets/urvi.jpeg";
import tales from "./assets/Tales_of_wheels.jpeg";
import suvaibox from "./assets/The_Suvai_Box.jpeg";
import rayapass from "./assets/Rayappas.jpeg";
import new_client from "./assets/s1.jpeg"; 

const logos = [
  { name: "Mahaveers", image: mahaveers },
  { name: "Urvi", image: urvi },
  { name: "Tales of the Wheels", image: tales },
  { name: "The Suvai Box", image: suvaibox },
  { name: "Rayapass", image: rayapass },
  { name: "New Client", image: new_client },
];

const Portfolio = () => {
  const [centerIndex, setCenterIndex] = useState(0); // Start with Mahaveers
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % logos.length);
    }, 2000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = (index) => {
    setCenterIndex(index);
    startAutoSlide();
  };

  const getClass = (index) => {
    const diff = (index - centerIndex + logos.length) % logos.length;
    if (diff === 0) return "logo-card center";
    if (diff === 1 || diff === logos.length - 1) return "logo-card side";
    if (diff === 2 || diff === logos.length - 2) return "logo-card far";
    return "logo-card outer";
  };

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Our Clients</h2>
      <div className="logo-row" data-center={centerIndex}>
        {logos.map((logo, i) => (
          <div key={i} className={getClass(i)} onClick={() => handleClick(i)}>
            <img src={logo.image} alt={logo.name} />
            <p>{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;