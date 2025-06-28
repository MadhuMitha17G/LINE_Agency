// ContactPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactModal.css";
import {
  FiArrowLeft,
  FiPhone,
  FiMapPin,
  FiMail,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiSend
} from "react-icons/fi";
import { motion } from "framer-motion";

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    brand: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message || "Submitted successfully!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        brand: "",
        service: ""
      });
    } catch (error) {
      alert("Error submitting form.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <FiFacebook />, url: "#" },
    { icon: <FiTwitter />, url: "#" },
    { icon: <FiInstagram />, url: "#" },
    { icon: <FiLinkedin />, url: "#" }
  ];

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button 
        className="back-btn"
        onClick={() => navigate("/")}
        whileHover={{ x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiArrowLeft /> Back to Home
      </motion.button>

      <div className="contact-container">
        <div className="contact-header">
          <motion.h1 
            className="contact-heading"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's Create Something <span>Extraordinary</span>
          </motion.h1>
          <motion.p 
            className="contact-subheading"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our team is ready to bring your vision to life. Reach out and let's start the conversation.
          </motion.p>
        </div>

        <div className="contact-content">
          <motion.div 
            className="contact-info-section"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="info-card">
              <div className="info-icon-container">
                <FiPhone className="info-icon" />
              </div>
              <h3>Direct Contact</h3>
              <p>+91 9876543210</p>
              <p>+91 9988776655</p>
              <div className="info-underline"></div>
            </div>
            
            <div className="info-card">
              <div className="info-icon-container">
                <FiMapPin className="info-icon" />
              </div>
              <h3>Our Studio</h3>
              <p>123 Main Street</p>
              <p>Chennai, India</p>
              <div className="info-underline"></div>
            </div>
            
            <div className="info-card">
              <div className="info-icon-container">
                <FiMail className="info-icon" />
              </div>
              <h3>Email Us</h3>
              <p>support@yourdomain.com</p>
              <p>sales@yourdomain.com</p>
              <div className="info-underline"></div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-section"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="form-title">Start Your Project</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div 
                className={`form-group ${activeField === 'name' ? 'active' : ''}`}
                onFocus={() => setActiveField('name')}
                onBlur={() => setActiveField(null)}
              >
                <label>Your Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <div className="input-underline"></div>
              </div>
              
              <div 
                className={`form-group ${activeField === 'email' ? 'active' : ''}`}
                onFocus={() => setActiveField('email')}
                onBlur={() => setActiveField(null)}
              >
                <label>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="input-underline"></div>
              </div>
              
              <div 
                className={`form-group ${activeField === 'contact' ? 'active' : ''}`}
                onFocus={() => setActiveField('contact')}
                onBlur={() => setActiveField(null)}
              >
                <label>Phone Number</label>
                <input
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
                <div className="input-underline"></div>
              </div>
              
              <div 
                className={`form-group ${activeField === 'brand' ? 'active' : ''}`}
                onFocus={() => setActiveField('brand')}
                onBlur={() => setActiveField(null)}
              >
                <label>Brand Name</label>
                <input
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                />
                <div className="input-underline"></div>
              </div>
              
              <div className="form-group">
                <label>Service Needed</label>
                <select 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="atl">ATL Marketing</option>
                  <option value="btl">BTL Marketing</option>
                  <option value="ttl">TTL Marketing</option>
                </select>
              </div>
              
              <motion.button 
                type="submit" 
                className="send-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend className="send-icon" /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="social-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="connect-subtitle">Connect With Us</h2>
          <div className="social-row">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="social-link"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;