import { useRef, useState, useEffect } from "react";
import "./Home.css";
import Services from "./Services";
import Teams from "./Teams";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Loader from "./Loader";
import bgImage from "./assets/LINE-BACKGROUND-01.png";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import amplitude from "./amplitude"; // ➕ Amplitude import

const Home = () => {
  const homeRef = useRef(null);
  const whyChooseRef = useRef(null);
  const servicesRef = useRef(null);
  const teamsRef = useRef(null);
  const portfolioref = useRef(null);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (ref) => {
    amplitude.track("Nav Click", { target: ref.current?.id || "scroll" });
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

  if (loading) return <Loader />;

  return (
    <div className="home-container" style={backgroundStyle}>
      {/* Header */}
      <header className="professional-header" style={{ position: 'sticky', top: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
        <div className="header-left">
          <img
            src="/LINE LOGO-WHITE.png"
            alt="LINE Agency Logo"
            className="professional-logo"
          />
        </div>
        <nav className={`header-right ${menuOpen ? "open" : ""} hideformobile`}>
          <ul>
            <li onClick={() => scrollToSection(homeRef)}>Home</li>
            <li onClick={() => scrollToSection(servicesRef)}>Services</li>
            <li onClick={() => scrollToSection(teamsRef)}>Team</li>
            <li onClick={() => scrollToSection(portfolioref)}>Work</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </nav>
      </header>

      <nav className={`header-right ${menuOpen ? "open" : ""} hideForDesktop`}>
        <ul>
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li onClick={() => scrollToSection(servicesRef)}>Services</li>
          <li onClick={() => scrollToSection(teamsRef)}>Team</li>
          <li onClick={() => scrollToSection(portfolioref)}>Work</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" ref={homeRef} id="home">
        <div className="custom-hero-container-left">
          <motion.h1
            className="custom-hero-title-left enlarged-hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Let's Draw the Line to
            <br />
            Your Brand's {" "}
            <span className="highlight-animated">
              <TypeAnimation
                sequence={[
                  "Success.",
                  2000,
                  "Story.",
                  2000,
                  "Strategy.",
                  2000,
                  "Growth.",
                  2000,
                  "Voice.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={60}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p
            className="custom-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <br />
            We craft meaningful connections between brands and people where strategy meets creativity in every line.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Section */}
      <motion.section className="why-choose-section" ref={whyChooseRef} id="why-choose">
        <div className="creative-header">
          <h2 className="section-title">Why choose <span className="line-highlight">LINE</span>?</h2>
        </div>
        <div className="letter-grid">
          {whyChooseContent.map((item, index) => (
            <motion.div
              key={index}
              className="letter-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onViewportEnter={() => amplitude.track("Section Viewed", { section: `WhyChoose-${item.letter}` })}
            >
              <div className="letter-circle">{item.letter}</div>
              <p className="letter-description">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div className="about-link-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <button className="about-button" onClick={() => {
          amplitude.track("CTA Clicked", { location: "Home About Button" });
          navigate("/about");
        }}>Learn More About Us</button>
      </motion.div>

      {/* Services Section */}
      <motion.section id="services" className="content-section service-section-and-teams-patch" style={{ paddingBottom: 0 }} ref={servicesRef}
        onViewportEnter={() => amplitude.track("Section Viewed", { section: "Services" })}
      >
        <Services />
      </motion.section>

      {/* Teams Section */}
      <motion.section id="teams" className="content-section service-section-and-teams-patch" style={{ paddingTop: 0 }} ref={teamsRef}
        onViewportEnter={() => amplitude.track("Section Viewed", { section: "Teams" })}
      >
        <Teams />
      </motion.section>

      {/* Portfolio Section */}
      <motion.section id="portfolio" className="content-section" ref={portfolioref}
        onViewportEnter={() => amplitude.track("Section Viewed", { section: "Portfolio" })}
      >
        <Portfolio />
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
