import React, { useState, useRef, useEffect } from "react";
import "./Portfolio.css";
import ggAgarbathie from "./assets/GG Agarbathie Logo - Eng_PNG.png";
import mahaveers from "./assets/MAHAVEERS - PINK.png";
import rayapass from "./assets/Rayappas - Green.png";
import tales from "./assets/Tails on Wheels Logo 2.png";
import suvaibox from "./assets/thesuvaibox.png";
import snv from "./assets/LOGO.png";

const logos = [
  { image: ggAgarbathie, name: "GG Agarbathie" },
  { image: mahaveers, name: "Mahaveers" },
  { image: rayapass, name: "Rayapass" },
  { image: tales, name: "Tails on Wheels" },
  { image: suvaibox, name: "The Suvai Box" },
  { image: snv, name: "SNV" },
];

const testimonials = [
  {
    name: "Usha Rani",
    company: "Bingen",
    feedback: "The agency's ability to execute cross-platform campaigns seamlessly has brought us consistent success.",
    rating: 5
  },
  {
    name: "Arun Kumar",
    company: "GG Agarbathie",
    feedback: "Bhogan Mediasoft truly transformed our brand presence.",
    rating: 5
  },
    {
    name: "madhu",
    company: "Bingen",
    feedback: "The agency's ability to execute cross-platform campaigns seamlessly has brought us consistent  truly transformed our brand presence.success.",
    rating: 5
  },
    {
    name: "akshaya",
    company: "Bingen",
    feedback: "The agency's ability to execute cross-platform truly transformed our brand presence. truly transformed our brand presence. campaigns seamlessly has brought us consistent success.",
    rating: 5
  },
    {
    name: "yuvasree",
    company: "Bingen",
    feedback: "The agency's ability to execute cross-platform campaigns  truly transformed our brand presence. seamlessly has brought us consistent success.",
    rating: 5
  },
];

const Portfolio = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const timeoutRef = useRef(null);

  // Logo carousel functions
  const handleLogoClick = (index) => setCenterIndex(index);
  
  const getLogoClass = (index) => {
    const diff = (index - centerIndex + logos.length) % logos.length;
    if (diff === 0) return "logo-card center";
    if (diff === 1 || diff === logos.length - 1) return "logo-card side";
    return "logo-card";
  };

  // Auto-rotate testimonials
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentTestimonial(prev => 
        (prev === testimonials.length - 1) ? 0 : prev + 1
      ),
      2000
    );
    return () => resetTimeout();
  }, [currentTestimonial]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
    resetTimeout();
  };

  return (
    <div className="portfolio-container">
      {/* Brands Section */}
      <div className="brands-section">
        <h2 className="section-title">Brands We've Worked With</h2>
        <div className="title-line"></div>
        <div className="logo-row">
          {logos.map((logo, i) => (
            <div
              key={i}
              className={getLogoClass(i)}
              onClick={() => handleLogoClick(i)}
              onMouseEnter={() => handleLogoClick(i)}
            >
              <div className="logo-square">
                <img src={logo.image} alt={logo.name} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="testimonial-header">
          <div className="testimonial-intro">
            <h3>Take a look at what our clients have to say about their journey with us.</h3>
          </div>
          <div className="testimonial-display">
            <div className="testimonial-slider">
              <div className="testimonial-card">
                <div className="stars">
                  {Array(testimonials[currentTestimonial].rating).fill().map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="feedback">"{testimonials[currentTestimonial].feedback}"</p>
                <p className="client-name">— {testimonials[currentTestimonial].name}</p>
                <p className="company-name">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>
            <div className="dots-container">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  className={`dot ${currentTestimonial === idx ? "active" : ""}`}
                  onClick={() => handleDotClick(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;