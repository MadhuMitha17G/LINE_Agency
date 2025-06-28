import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";

import atlImage from './assets/ATL.png';
import ttlImage from './assets/TTL.png';
import btlImage from './assets/BTL.png';

import { StackedCarousel } from './StackedCarousel';
import './react-card-stack-carousel/styles/styles.css';

const Services = () => {
  const navigate = useNavigate();
  const imageUrls = [atlImage, ttlImage, btlImage];

  const handleViewWork = () => {
    navigate("/our-work");
  };

  return (
    <div className="services-section">
      {/* Our Services heading at the top */}
      <h2 className="section-heading">Our Services</h2>

      {/* Carousel below heading */}
      <div className="carousel-wrapper">
        <StackedCarousel height={300} autoplay>
          {imageUrls.map((url, index) => (
            <div key={index} className="image-card">
              <img src={url} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </StackedCarousel>
      </div>

      {/* View Work button 1cm below cards */}
      <div className="view-work-container">
        <button className="view-button" onClick={handleViewWork}>
          All Services
        </button>
      </div>
    </div>
  );
};

export default Services;