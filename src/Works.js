import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Works.css';
import Footer from './Footer'
import ContactModal from './ContactModal';
const allServices = [
  {
    title: "Social Media Management",
    description: "We handle your social media accounts, create engaging posts, monitor interactions, and ensure consistent branding to grow your online community.",
    icon: "fa-comments"
  },
  {
    title: "Ad Campaign",
    description: "We design and execute targeted ad campaigns across platforms to drive awareness, engagement, and measurable conversions for your brand.",
    icon: "fa-bullhorn"
  },
  {
    title: "Content Marketing",
    description: "We craft compelling blogs, videos, and visuals to attract and retain your audience while improving your brand's visibility and trust.",
    icon: "fa-pen-fancy"
  },
  {
    title: "Product Photography",
    description: "Our team captures high-quality, detail-rich images that showcase your products and increase consumer appeal and professionalism.",
    icon: "fa-camera"
  },
  {
    title: "Content Production",
    description: "From video shoots to animations, we deliver polished multimedia content that effectively conveys your brand's message and values.",
    icon: "fa-video"
  },
  {
    title: "E-commerce & Web Design",
    description: "We build visually stunning and user-friendly websites that boost online sales and provide an intuitive shopping experience for your customers.",
    icon: "fa-shopping-cart"
  },
  {
    title: "Public Relations",
    description: "We shape your public image through strategic communication, press releases, and media outreach to ensure positive brand perception.",
    icon: "fa-newspaper"
  },
  {
    title: "Branding & Packaging Design",
    description: "We develop cohesive brand identities and eye-catching packaging that communicates your values and captivates customers instantly.",
    icon: "fa-palette"
  },
  {
    title: "Analytics & Reporting",
    description: "With in-depth analytics, we track key performance indicators and provide actionable insights to continuously refine your strategies.",
    icon: "fa-chart-line"
  },
  {
    title: "Multimedia Production",
    description: "We produce videos, motion graphics, and audio content that elevate your storytelling and keep your audience engaged and informed.",
    icon: "fa-film"
  }
];

const WorksPage = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false); 
  const visibleServices = showAll ? allServices : allServices.slice(0, 6);

  const handleCardHover = (index) => setActiveCard(index);
  const handleCardLeave = () => setActiveCard(null);

  return (
    <div className="works-page">
      <button 
        className="back-button" 
        onClick={() => navigate('/')}
      >
        ← Home
      </button>

      <header className="services-header">
        <div className="header-content">
          <h1>
            <span className="highlight">Elevate</span> Your Brand With Our 
            <span className="highlight"> Digital</span> Solutions
          </h1>
          <p>Discover how we can transform your digital presence</p>
        </div>
      </header>

      <div className="services-grid">
        {visibleServices.map((service, index) => (
          <div 
            key={index}
            className={`service-card ${activeCard === index ? 'hovered' : ''}`}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <div className="card-content">
              <div className="card-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <div className="card-title-wrapper">
                <h3>{service.title}</h3>
                <div className="card-underline"></div>
              </div>
              <div className="card-description">
                <p>{service.description}</p>
              </div>
            </div>
            <div className="card-highlight"></div>
          </div>
        ))}
      </div>

      <div className="toggle-btn-container">
        <button 
          className="toggle-button" 
          onClick={() => setShowAll(!showAll)}
        >
          <span>{showAll ? "Show Less" : "Show More"}</span>
          <div className="button-underline"></div>
        </button>
      </div>
       <div className="connect-section">
        <div className="connect-line"></div>
        <div className="connect-content">
          <h3>Ready to take the next step?</h3>
          <p>Let's connect and create something amazing together</p>
          <button
            className="connect-button"
            onClick={() => navigate("Contact /")
            }
          >
            Connect
            <span className="connect-arrow">→</span>
          </button>
        </div>
        <div className="connect-line"></div>
      </div>

      <Footer />
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </div>
  );
};

export default WorksPage;