import React, { useEffect, useRef, useState } from "react";
import "./LineAnimation.css";

const LineAnimation = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of component is in view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {"LINE".split("").map((char, index) => (
        <div
          key={index}
          className={`letter ${inView ? "animate" : ""}`}
          style={{ transitionDelay: `${index * 0.3}s` }}
        >
          {char}
          <div className="circle"></div>
        </div>
      ))}
    </div>
  );
};

export default LineAnimation;
