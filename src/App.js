// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Services from "./Services";
import Works from "./Works";
import ContactPage from "./ContactModal";  // Add this import
//import { StackedCarousel } from './StackedCarousel'; // Assuming you are using a local copy of the component
import './react-card-stack-carousel/styles/styles.css'; // Required styles
//import LineAnimation from './LineAnimation';
import AboutUs from "./AboutUs";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<Works />} /> {/* Add this route */}
           <Route path="/contact" element={<ContactPage />} /> {/* new contact route */}
           <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}


export default App;
