import React from "react";
import '../css/services.css'
import { servicesData } from '../data/serviceData'

function Services() {
  
  return (
    <section className="services-section">
      <h2 style={{color:'#fff', textAlign:'center', marginBottom:'0.5rem'}}>Services</h2>
      <p style={{color:'#bdbdbd', textAlign:'center', marginBottom:'2.5rem'}}>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
      <div className="services-grid">
        {servicesData.map((service, idx) => (
          <div className="service-card" key={idx}>
            <img src={service.icon} alt="Service Icon" className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

