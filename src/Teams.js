import React, { useState } from "react";
import "./Teams.css";
import founder1 from "./assets/p1.jpg";
import founder2 from "./assets/p2.jpg";
import founder3 from "./assets/p3.jpg";
import creative1 from "./assets/c1.jpeg";
import creative2 from "./assets/c2.jpeg";

const founders = [
  {
    name: "Apurva",
    image: founder1,
    message: "Visionaries don’t wait for chances — they create them.",
  },
  {
    name: "pavithra",
    image: founder2,
    message: "Innovation begins with bold ideas and brave hearts.",
  },
  {
    name: "vikash",
    image: founder3,
    message: "Every brand has a story — we make it unforgettable.",
  },
];

const creatives = [
  {
    name: "Bharat",
    image: creative1,
    message: "Creativity is intelligence having fun.",
  },
  {
    name: "Sujan",
    image: creative2,
    message: "Design is thinking made visual.",
  },
];

const Teams = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="teams-container">
      <h2 className="team-title">Our Team</h2>

      <h3 className="sub-title">Meet the Founders</h3>
      <div className="card-row">
        {founders.map((member, index) => (
          <div
            className={`flip-card ${flippedIndex === index ? "flipped" : ""}`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="flip-card-back">
                <p>{member.message}</p>
              </div>
            </div>
            <p className="member-name">{member.name}</p>
          </div>
        ))}
      </div>

      <h3 className="sub-title">Our Creative Minds</h3>
      <div className="card-row center-row">
        {creatives.map((member, index) => (
          <div
            className={`flip-card ${flippedIndex === index + 3 ? "flipped" : ""}`}
            key={index + 3}
            onClick={() => handleClick(index + 3)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="flip-card-back">
                <p>{member.message}</p>
              </div>
            </div>
            <p className="member-name">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
