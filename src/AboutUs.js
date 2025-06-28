import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();
  
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <motion.h1 
            className="about-main-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WE DON'T JUST CREATE<br />
            <span className="highlight-text">CAMPAIGNS,</span><br />
            WE CRAFT <span className="highlight-text">CONNECTIONS</span>
          </motion.h1>
          
          <motion.div
            className="about-hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p>LINE is a full-service Integrated Marketing Communications (IMC) agency built for the brands of tomorrow.</p>
            <button 
              className="back-button"
              onClick={() => navigate(-1)}
            >
              <FiChevronRight className="rotate-180" /> Back
            </button>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-content-section">
        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Who We Are</h2>
          <p className="body-text">
            We are one of the leading Brand Strategies in Coimbatore with a wide range of knowledge 
            and experience in creating and promoting brands with a multi-disciplinary team, proficient 
            in market research, corporate design, logo design, brand activation, media planning, 
            digital ads and strategic, large-scale events, public relations, and content creation.
          </p>
          <p className="body-text">
            Our services equip small business owners and startups to map benefits at a faster pace. 
            We pride ourselves on handling both online and offline engagements for our clients, 
            seamlessly integrating both for growth.
          </p>
        </motion.div>
      </section>

      {/* Traditional Vision & Mission Section */}
      <section className="traditional-vm-section">
        <div className="vm-content-wrapper">
          {/* Vision */}
          <motion.div 
            className="vision-mission-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="vm-title">Vision</h2>
            <div className="vm-line"></div>
            <p className="vm-text">
              LINE is an Integrated Marketing Communications Agency founded with the vision to bring a brand's story 
              to life across all marketing channels. By combining creative strategy, digital innovation, and traditional 
              media, the agency ensures a cohesive and impactful message that resonates with the target audience.
            </p>
          </motion.div>
          
          {/* Mission */}
          <motion.div 
            className="vision-mission-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="vm-title">Mission</h2>
            <div className="vm-line"></div>
            <p className="vm-text">
              LINE is dedicated to aligning brand communication with business objectives, creating unified campaigns 
              that drive engagement and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovative Core Values Display */}
      <section className="line-values-section">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>
        
        <div className="line-path">
          {/* Connecting line */}
          <svg className="line-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M10,10 C30,50 70,50 90,90" 
              stroke="var(--secondary)" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>

          {/* Value points along the line */}
          {[
            "Clarity in Communication",
            "Collaboration over Competition",
            "Creativity with Relevance",
            "Adaptability across Channels",
            "Integrity in Execution",
            "Data-driven Decisions"
          ].map((value, index) => (
            <motion.div
              key={index}
              className="value-point"
              style={{
                left: `${10 + (index * 15)}%`,
                top: `${10 + (index * 13)}%`
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <div className="value-dot" />
              <div className="value-content">
                <div className="value-number">{index + 1}</div>
                <p className="value-text">{value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title">Ready to draw the line to your brand's success?</h2>
          <button 
            className="cta-button"
            onClick={() => navigate("/contact")}
          >
            Get in Touch <FiChevronRight />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;