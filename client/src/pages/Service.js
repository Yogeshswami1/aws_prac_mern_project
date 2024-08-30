// src/Service.js
import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="services">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Explore the wide range of services we offer to meet your needs.</p>
      </section>

      <section className="services-list">
        <div className="service-card">
          <img src="https://via.placeholder.com/100" alt="Service 1" />
          <h3>Web Development</h3>
          <p>
            Our expert team provides top-notch web development services to
            create stunning and functional websites.
          </p>
        </div>
        <div className="service-card">
          <img src="https://via.placeholder.com/100" alt="Service 2" />
          <h3>Marketing</h3>
          <p>
            We offer comprehensive marketing strategies to help your business
            reach its target audience effectively.
          </p>
        </div>
        <div className="service-card">
          <img src="https://via.placeholder.com/100" alt="Service 3" />
          <h3>Consulting</h3>
          <p>
            Our consulting services provide you with the insights and
            strategies needed to grow your business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Service;
