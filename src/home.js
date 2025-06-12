import React, { useRef,useState}from "react";
import "./Home.css";
import Services from "./Services";
import Teams from "./Teams";
import Portfolio from "./Portfolio";
import { FaHome, FaServicestack, FaUsers, FaBriefcase, FaEnvelope } from "react-icons/fa";
import bgImage from "./assets/LINE-BACKGROUND-01.png";
import Footer from "./Footer";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const Home = () => {
  const homeRef = useRef(null);
  const whyChooseRef = useRef(null);
  const servicesRef = useRef(null);
  const teamsRef = useRef(null);
  const portfolioref = useRef(null);
  const [showContact, setShowContact] = useState(false);


  ///const [activeLetter, setActiveLetter] = useState(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const whyChooseContent = [
    { letter: "L", text: "Leading in innovative digital marketing services" },
    { letter: "I", text: "Impacting brands with tailored strategies" },
    { letter: "N", text: "Nurturing growth through data-driven results" },
    { letter: "E", text: "Exceeding expectations with flawless execution" }
  ];

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // eslint-disable-next-line no-unused-vars
  const letterVariants = {
    normal: { scale: 1 },
    active: { scale: 1.5, color: "#FF8C00" }
  };

  return (
    <div className="home-container" style={backgroundStyle}>
      {/* Floating Logo */}
      <motion.div 
        className="floating-logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <img 
          src="/LINE LOGO-WHITE.png" 
          alt="LINE Agency Logo" 
          className="logo-img" 
        />
      </motion.div>

      {/* Floating Icons - Left */}
      <motion.div 
        className="floating-icons left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        {[
          { icon: <FaHome />, title: "Home", ref: homeRef },
          { icon: <FaServicestack />, title: "Services", ref: servicesRef },
          { icon: <FaUsers />, title: "Teams", ref: teamsRef },
          { icon: <FaBriefcase />, title: "Portfolio", ref: portfolioref }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="icon"
            title={item.title}
            onClick={() => scrollToSection(item.ref)}
            whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 107, 0, 0.4)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>
      {/* Floating Icons - Right */}
      <motion.div 
        className="floating-icons right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
    <motion.div
  className="icon"
  title="Mail Us"
  whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 107, 0, 0.4)" }}
  whileTap={{ scale: 0.9 }}
  onClick={() => setShowContact(true)} // 💡 open modal
>
          <FaEnvelope />
        </motion.div>
      </motion.div>

      {/* Scrollable Sections */}
      <div className="scroll-content ">
        {/* Home Section */}
        <motion.section
          id="home"
          className="content-section "
          ref={homeRef}
          style={{ paddingBottom: "100px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          
          <motion.div 
            className="content-right"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants}>Who are we?</motion.h1>
            <motion.div className="content-block" variants={itemVariants}>
              <motion.p variants={itemVariants}>
                We are a future-ready, full-service Integrated Marketing Communications (IMC) agency committed to building powerful 
                brands for the modern world. Our approach blends strategic insight, compelling storytelling, and flawless execution to create lasting impact.
              </motion.p>
               <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                We bring together digital, design, content, and media under one unified approach.
              </motion.p>
             <motion.p 
                className="highlight-line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                WE DRAW THE LINE BETWEEN STRATEGY——CREATIVITY
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Why Choose Section */}
<motion.section 
  className="why-choose-section" 
  ref={whyChooseRef}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div className="creative-header">

    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      Why choose <span className="line-highlight">LINE</span>?
    </motion.h2>
  </div>

  <div className="letter-grid">
    {whyChooseContent.map((item, index) => (
      <motion.div 
        key={index}
        className="letter-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + index * 0.1 }}
      >
        <div className="letter-circle">{item.letter}</div>
        <p className="letter-description">{item.text}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          className="content-section"
          ref={servicesRef}
          style={{ padding: "100px 0" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Services />
        </motion.section>

        {/* Teams Section */}
        <motion.section
          id="teams"
          className="content-section"
          ref={teamsRef}
          style={{ padding: "100px 0" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Teams />
        </motion.section>

        {/* Portfolio Section */}
        <motion.section
          id="portfolio"
          className="content-section"
          ref={portfolioref}
          style={{ paddingTop: "120px", minHeight: "30vh", paddingBottom: "100px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Portfolio />
        </motion.section>
        
        <Footer />
      </div>
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </div>
  );
};

export default Home;