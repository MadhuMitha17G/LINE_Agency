import React, { useState, useRef, useEffect } from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import busBranding from './assets/bus_branding.png';
import busShelter from './assets/bus_shelther.jpg';
import tvAds from './assets/tv_add.jpg';
import newspaperAds from './assets/new_paper.jpg';
import radioAds from './assets/radio.jpg';
import hoarding from './assets/hoarding.jpg';
import Events from './assets/event.jpg';
import Content from './assets/Content.jpg';
import ContentMarket from './assets/ContentMarketing.jpg';
import OTT from './assets/OTT.jpg';
import Experiential from './assets/Experiential.jpg';
import Web from './assets/Web.jpg';
import Performance from './assets/Performance.jpg';
import Launch from './assets/Launch.jpg';
import Social from './assets/Social.jpg';
import Social_Market from './assets/Social_Marketing.jpg';
import Reel from './assets/reel.jpg';

const Services = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const scrollContainerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startPosRef = useRef({ x: 0, left: 0 });
  const animationRef = useRef(null);
  const requestRef = useRef(null);
  const scrollSpeedRef = useRef(1.5);

  // Service data
  const servicesData = {
    "Above the Line": [
      { title: "Bus Branding", img: busBranding },
      { title: "Bus Shelter", img: busShelter },
      { title: "TV Ads", img: tvAds },
      { title: "Newspaper ads", img: newspaperAds },
      { title: "Radio Ads", img: radioAds },
      { title: "Hoarding", img: hoarding },
    ],
    "Below the Line": [
      { title: "In-House Events", img: Events },
      { title: "Launch Events", img: Launch },
      { title: "Experiential Marketing", img: Experiential },
      { title: "Content Marketing", img: ContentMarket },
      { title: "OTT Ads", img: OTT },
    ],
    "Through the Line": [
      { title: "Social Media Management", img: Social },
      { title: "Social Media Marketing", img: Social_Market },
      { title: "Content Strategy", img: Content },
      { title: "Reel Production", img: Reel },
      { title: "Web Marketing", img: Web },
      { title: "Performance Marketing", img: Performance },
    ]
  };

  // Auto-scroll animation
  const animateScroll = () => {
    if (!scrollContainerRef.current || isDraggingRef.current) return;
    
    const container = scrollContainerRef.current;
    const containerWidth = container.offsetWidth;
    const contentWidth = container.scrollWidth;
    
    if (contentWidth <= containerWidth) return;

    container.scrollLeft += scrollSpeedRef.current;
    
    // Reset to start when reaching the duplicated content
    if (container.scrollLeft >= contentWidth / 2) {
      container.scrollLeft = 0;
    }
    
    requestRef.current = requestAnimationFrame(animateScroll);
  };

  // Start/stop auto-scroll
  useEffect(() => {
    if (activeCategory) {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = 0;
      }
      requestRef.current = requestAnimationFrame(animateScroll);
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [activeCategory]);

  // Pointer event handlers
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    const x = e.clientX || e.touches[0].clientX;
    startPosRef.current = {
      x,
      left: scrollContainerRef.current.scrollLeft
    };
    scrollContainerRef.current.style.cursor = 'grabbing';
    scrollContainerRef.current.style.scrollBehavior = 'auto';
    cancelAnimationFrame(requestRef.current);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    
    const x = e.clientX || e.touches[0].clientX;
    const dx = x - startPosRef.current.x;
    scrollContainerRef.current.scrollLeft = startPosRef.current.left - dx;
  };

  const handlePointerUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grab';
        scrollContainerRef.current.style.scrollBehavior = 'smooth';
      }
      requestRef.current = requestAnimationFrame(animateScroll);
    }
  };

  // Set up event listeners
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('mousedown', handlePointerDown);
    container.addEventListener('touchstart', handlePointerDown, { passive: false });
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove, { passive: false });
    container.addEventListener('mouseup', handlePointerUp);
    container.addEventListener('touchend', handlePointerUp);
    container.addEventListener('mouseleave', handlePointerUp);

    return () => {
      container.removeEventListener('mousedown', handlePointerDown);
      container.removeEventListener('touchstart', handlePointerDown);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('touchmove', handlePointerMove);
      container.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('touchend', handlePointerUp);
      container.removeEventListener('mouseleave', handlePointerUp);
    };
  }, []);

  const handleViewWork = () => {
    navigate("/our-work");
  };

  return (
    <div className="services-section">
      <h2 className="section-heading">Our Services</h2>
      <p className="section-subtitle">Comprehensive marketing solutions tailored to your needs</p>

      <div className="main-cards-container">
        {Object.keys(servicesData).map((title) => (
          <div
            key={title}
            className={`main-card ${title === "Above the Line" ? "highlight-card" : ""}`}
            onMouseEnter={() => setActiveCategory(title)}
          >
            <div className="card-content">
              <div className="card-abbr">
                {title === "Above the Line" ? "ATL" : title === "Through the Line" ? "TTL" : "BTL"}
              </div>
              <div className="card-title">{title}</div>
              <div className="card-description">
                {title === "Above the Line" 
                  ? "Mass media campaigns for broad reach" 
                  : title === "Through the Line" 
                  ? "Integrated marketing approaches" 
                  : "Targeted promotional activities"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeCategory && (
        <div 
          className="subcards-section"
          onMouseEnter={() => setActiveCategory(activeCategory)}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <h3 className="subcards-heading">{activeCategory} Services</h3>
          <div 
            className="subcards-container"
            ref={scrollContainerRef}
          >
            {[...servicesData[activeCategory], ...servicesData[activeCategory]].map((item, i) => (
              <div key={`${i}-${item.title}`} className="subcard">
                <div className="subcard-img-container">
                  <img src={item.img} alt={item.title} className="subcard-img" />
                </div>
                <div className="subcard-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="view-work-container">
        <button className="view-button" onClick={handleViewWork}>
          Explore All Services
        </button>
      </div>
    </div>
  );
};

export default Services;