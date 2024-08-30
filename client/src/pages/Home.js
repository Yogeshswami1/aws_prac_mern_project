// src/Home.js
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to MyBrand</h1>
        <p>Your one-stop solution for all your needs.</p>
        <a href="/services" className="cta-button">Explore Our Services</a>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At MyBrand, we are dedicated to providing top-notch services to help
          you achieve your goals. Our team of experts works tirelessly to ensure
          customer satisfaction and deliver exceptional results.
        </p>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-card">
          <h3>Service One</h3>
          <p>We offer a wide range of services to meet your needs, including web development, marketing, and more.</p>
        </div>
        <div className="service-card">
          <h3>Service Two</h3>
          <p>Our team specializes in creating custom solutions that fit your business perfectly.</p>
        </div>
        <div className="service-card">
          <h3>Service Three</h3>
          <p>With years of experience, we deliver results that exceed expectations.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
