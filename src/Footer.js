// src/Footer.js
import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1: Company Info */}
        <div className="footer-section company-info">
          <h2>LINE Agency</h2>
          <p>Your partner in powerful branding & integrated marketing.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#teams">Our Team</a></li>
            <li><a href="#portfolio">Portfolio</a></li>~
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:hello@lineagency.com">hello@lineagency.com</a></p>
          <p>Phone: +91 84380 78754 </p>
          <p>Coimbatore, Tamil Nadu</p>
        </div>

        {/* Column 4: Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#https://www.instagram.com/madhu_guna1711?igsh=dG8wMDdqZGNyMG14" title="Instagram"><FaInstagram /></a>
            <a href="www.linkedin.com/in/madhu-mitha-g-6662ab285" title="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 LINE Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
