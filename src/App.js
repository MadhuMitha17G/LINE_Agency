// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./home";
import Services from "./Services";
import Works from "./Works";
import ContactPage from "./ContactModal";
import AboutUs from "./AboutUs";
import amplitude from "./amplitude"; // add this line

function TrackPageView() {
  const location = useLocation();

  useEffect(() => {
    amplitude.track("Page Viewed", { page: location.pathname });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/our-work" element={<Works />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <TrackPageView />
    </Router>
  );
}

export default App;
