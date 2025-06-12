import React from "react";
import { FaTimes,} from "react-icons/fa";
import "./ContactModal.css";

const ContactModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Left Text Side */}
        <div className="left-side">
          <h2>
            <span>Get</span><br />
            <span>in</span><br />
            <span className="highlight">LINE</span><br />
            <span>with</span><br />
            <span>us</span>
          </h2>
        </div>

        {/* Right Form Side */}
        <div className="right-side">
          <form className="form-fields">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email ID</label>
            <input type="email" placeholder="Enter a valid email address" />

            <label>Contact number</label>
            <input type="tel" placeholder="Enter your contact number" />

            <label>Brand name</label>
            <input type="text" placeholder="Enter your brand name" />

            <label>Service required</label>
            <select>
              <option value="">Select a service</option>
              <option value="atl">ATL</option>
              <option value="btl">BTL</option>
              <option value="ttl">TTL</option>
            </select>
          </form>

          </div>
        </div>
      </div>
  );
};

export default ContactModal;
