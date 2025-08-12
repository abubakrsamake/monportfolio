// src/pages/Contact.jsx
import React, { useState } from "react";
import '../css/contact.css';

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    details: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-section">
      <h2>Contactez moi</h2>
      <p className="contact-subtitle">Un site, une app, une plateforme ? Je code vos ambitions.</p>

      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        
      >
        {/* Obligatoire pour Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>Ne pas remplir ce champ : <input name="bot-field" /></label>
        </p>

        <div className="contact-row">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-row">
          <input
            type="text"
            name="phone"
            placeholder="Numéro de téléphone"
            value={form.phone}
            onChange={handleChange}
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Service Of Interest</option>
            <option value="web">Web Development</option>
            <option value="uiux">UI/UX Design</option>
            <option value="video">Application mobile</option>
            <option value="other">Autre</option>
          </select>
        </div>

        <div className="contact-row">
          <input
            type="text"
            name="timeline"
            placeholder="Timeline"
            value={form.timeline}
            onChange={handleChange}
          />
          <textarea
            name="details"
            placeholder="Project Details..."
            value={form.details}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        <div className="contact-actions">
          <button type="submit" className="btn-primary">Envoyer</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
