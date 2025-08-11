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
    <section className="contact-section inspired-layout">
      <h2>Contact me</h2>
      <p className="contact-subtitle">Cultivating Connections: Reach Out And Connect With Me</p>

      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* Required hidden input for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Ne pas remplir ce champ : <input name="bot-field" onChange={handleChange} />
          </label>
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
            <option value="video">App Design</option>
            <option value="other">App Mobile</option>
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
