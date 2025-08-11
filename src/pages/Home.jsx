import React from "react";
import '../css/home.css'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Home({ onNavigate }) {
  return (
    <section className="home-section">
      <div className="profile-header">
        <div className="profile-info">
          <span className="intro-label">Bonjour, je suis</span>
          <h1 style={{fontWeight:600, color:'#fff', fontSize:'1.6rem', margin:'0 0 0.5rem 0'}}>Abu'bakr Samake</h1>
          <h2 className="main-title">Développeur Full-Stack</h2>
          <div className="social-icons">
            <a href="https://github.com/abubakrsamake" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="icon-btn" />
            </a>
            <a href="mailto:contact@abubakrsamake.dev" aria-label="Email">
              <HiOutlineMail className="icon-btn" />
            </a>
            <a href="https://www.linkedin.com/in/abubakr-samake-a6396036a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="icon-btn" />
            </a>
          </div>
          <div className="cta-buttons">
            <button onClick={() => onNavigate && onNavigate('Contact')} className="btn-primary">Contactez Moi</button>
            <a href="/cv/Cv_Abubakr_Samake.pdf" className="btn-secondary" download="Cv_Abubakr_Samake.pdf">Télécharger CV</a>
          </div>
          <div className="stats-row">
            <div className="stat-box"><span className="stat-value">5+</span><span className="stat-label">Expériences</span></div>
            <div className="stat-box"><span className="stat-value">20+</span><span className="stat-label">Projets réalisés</span></div>
            <div className="stat-box"><span className="stat-value">80+</span><span className="stat-label">Clients satisfaits</span></div>
          </div>
        </div>
        <div className="profile-photo">
          <img src="" alt="Avatar Abu bakr Samake" className="profile-avatar" />
        </div>
      </div>
    </section>
  );
}

export default Home;