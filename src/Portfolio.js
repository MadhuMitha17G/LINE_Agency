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
  // Duplicate logos for seamless looping
  { image: ggAgarbathie, name: "GG Agarbathie" },
  { image: mahaveers, name: "Mahaveers" },
  { image: rayapass, name: "Rayapass" },
  { image: tales, name: "Tails on Wheels" },
  { image: suvaibox, name: "The Suvai Box" },
  { image: snv, name: "SNV" },
];

const testimonials = [
  {
    name: "Bharat",
    feedback: "Line helped me bring my brand to life. They really understood what I wanted and turned it into something that looks and feels amazing. The new look made a big difference — more people noticed us, and engagement shot up. Super easy team to work with!",
    rating: 5
  },
  {
    name: "Arun Kumar",
    feedback: "The team at Line just gets it. Our social media used to feel all over the place, but now it’s sharp, fun, and totally us. Our followers are actually paying attention, and our reach has grown like crazy. Couldn’t be happier.",
    rating: 5
  },
  {
    name: "varun",
    feedback: "Line gave our website a full glow-up — it looks great and actually works. Their ad ideas were fresh and brought in real results. It finally feels like we’re showing up online the way we’re supposed to. They made the whole process smooth and stress-free.",
    rating: 5
  },
];

const Portfolio = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialTimeoutRef = useRef(null);

  // Auto-rotate testimonials
  useEffect(() => {
    resetTestimonialTimeout();
    testimonialTimeoutRef.current = setTimeout(
      () => setCurrentTestimonial(prev => 
        (prev === testimonials.length - 1) ? 0 : prev + 1
      ),
      3000
    );
    return () => resetTestimonialTimeout();
  }, [currentTestimonial]);

  const resetTestimonialTimeout = () => {
    if (testimonialTimeoutRef.current) clearTimeout(testimonialTimeoutRef.current);
  };

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
    resetTestimonialTimeout();
  };

  return (
    <div className="portfolio-container">
      {/* Brands Section */}
      <div className="brands-section">
        <h2 className="section-title">Brands We've Worked With</h2>
        <div className="logo-carousel-container">
          <div className="logo-carousel-track">
            {logos.map((logo, i) => (
              <div key={`${logo.name}-${i}`} className="logo-item">
                <img src={logo.image} alt={logo.name} />
              </div>
            ))}
          </div>
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