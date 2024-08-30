// src/About.js
import React from "react";
import "./About.css";
import UploadImage from "./UploadImage"; // Adjust the path if necessary
const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Learn more about our mission, vision, and the team that makes it all happen.</p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At MyBrand, our mission is to deliver high-quality services that empower businesses
          to achieve their goals. We believe in innovation, dedication, and putting our customers
          first in everything we do.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Chief Operating Officer</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <h3>Emily Johnson</h3>
          <p>Head of Marketing</p>
        </div>
      </section>

      {/* New Section for Image Upload */}
      <section className="upload-image-section">
        <h2>Upload Image</h2>
        <UploadImage />
      </section>
    </div>
  );
};

export default About;
