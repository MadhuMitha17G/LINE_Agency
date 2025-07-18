import React, { useState } from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaArrowUp, FaEnvelope, FaMapMarkerAlt, FaPhone,  } from "react-icons/fa";

const Footer = () => {
  const [showSocial, setShowSocial] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-container">
      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="contact-item">
          <div className="icon-wrapper">
            <FaEnvelope className="contact-icon" />
          </div>
          <a href="mailto:info@lineimc.in">info@lineimc.om</a>
        </div>
        
        <div className="contact-item">
          <div className="icon-wrapper">
            <FaMapMarkerAlt className="contact-icon" />
          </div>
          <span>Dr Nanjappa Road<br />Gandhipuram<br />Coimbatore, Tamil Nadu</span>
        </div>
        
        <div className="contact-item">
          <div className="icon-wrapper">
            <FaPhone className="contact-icon" />
          </div>
          <div className="phone-numbers">
            <span>+91 95855 39182</span>
            <span>+91 81052 02873</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp className="arrow-icon" />
          <span>Back Home</span>
        </button>
        
        <div className="copyright">
          © 2025 LINE Agency. All rights reserved.
        </div>
        
        <div className="social-section">
          <button 
            className="follow-button"
            onClick={() => setShowSocial(!showSocial)}
          >
            Follow Us
          </button>
          {showSocial && (
            <div className="social-icons">
              <a href="https://www.instagram.com/line_imc?igsh=NG5mNGlneXFqY3Jr" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.https://www.linkedin.com/in/barath-kumar-3b3a54194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app.com/in/madhu-mitha-g-6662ab285" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;