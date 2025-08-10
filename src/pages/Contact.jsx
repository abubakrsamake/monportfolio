import React, { useState } from "react";
import '../css/contact.css'
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation basique
    if (!form.name || !form.email || !form.service || !form.details) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    
    // Création du lien mailto avec les données du formulaire
    const subject = encodeURIComponent(`Demande de ${form.service} - ${form.name}`);
    const body = encodeURIComponent(
      `Bonjour Abu'bakr,\n\n` +
      `Je vous contacte concernant : ${form.service}\n\n` +
      `Nom : ${form.name}\n` +
      `Email : ${form.email}\n` +
      `Téléphone : ${form.phone || 'Non renseigné'}\n` +
      `Timeline : ${form.timeline || 'À discuter'}\n\n` +
      `Détails du projet :\n${form.details}\n\n` +
      `Cordialement,\n${form.name}`
    );
    
    // Ouverture du client email
    window.location.href = `mailto:contact@abubakrsamake.dev?subject=${subject}&body=${body}`;
    
    // Reset du formulaire
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      timeline: "",
      details: ""
    });
    
    alert("Votre client email va s'ouvrir avec le message pré-rempli !");
  };

  return (
    <section className="contact-section inspired-layout">
      <h2>Contact me</h2>
      <p className="contact-subtitle">Cultivating Connections: Reach Out And Connect With Me</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-row">
          <input
            type="text"
            name="name"
            placeholder="Name"
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
            placeholder="Phone Number"
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
            <option value="video">Video Editing</option>
            <option value="other">Other</option>
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
          />
        </div>
        <div className="contact-actions">
          <button type="submit" className="btn-primary">Send</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;