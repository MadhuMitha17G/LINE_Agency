import React, { useEffect } from "react";
import "./Services.css";
import bgImage from "./assets/LINE-BACKGROUND-01.png"; // reuse your background image

const Services = () => {
  useEffect(() => {
    const lines = document.querySelectorAll(".animated-line");
    lines.forEach((line) => {
      line.classList.add("animate-line");
    });
  }, []);

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="services-container" style={backgroundStyle}>
      <div className="services-overlay">
        {/* ABOVE THE LINE */}
        <div className="fade-in">
          <h2 className="service-title">Above the Line</h2>
          <p className="service-text">
            • TV Commercials (TVCs) • Radio Advertisements • Cinema Advertising •
            Print Advertising (Newspapers, Magazines) • Outdoor (OOH) Advertising:
            Billboards, Hoardings, Transit Ads (Bus, Metro, Auto) • Media Buying &
            Planning (Traditional Media) • Brand Awareness Campaigns
          </p>
          <div className="animated-line" />
        </div>

        {/* THROUGH THE LINE */}
        <div className="fade-in">
          <h2 className="service-title">Through the Line</h2>
          <p className="service-text">
            • Social Media Marketing (Organic + Paid) • Search Engine Marketing
            (Google Ads, YouTube Ads) • Display Ads • Programmatic Ads • Email &
            SMS Campaigns • Influencer Marketing • Content Creation & Reels
            Production • Performance Marketing Campaigns • CRM & Retargeting
            Campaigns • Campaign Strategy & Planning • Integrated Campaign
            Execution (TV + Digital + Ground) • Analytics, Reporting & Optimization
          </p>
          <div className="animated-line" />
        </div>

        {/* BELOW THE LINE */}
        <div className="fade-in">
          <h2 className="service-title">Below the Line</h2>
          <p className="service-text">
            • In-store Promotions • Events & Experiential Marketing • Brand
            Activations • Roadshows & Canter Promotions • Product Sampling, Mall &
            Society Activations • Retail Branding • Print Collateral (Brochures,
            Flyers, Leaflets) • Corporate Gifting & Merchandise • Stall Design &
            Fabrication (Expos, Trade Shows) • Dealer/Distributor Meet Management
          </p>
          <div className="animated-line" />
        </div>
      </div>
    </div>
  );
};

export default Services;
