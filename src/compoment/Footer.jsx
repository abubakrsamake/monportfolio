import React from "react";
import '../css/footer.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
function Footer() {
  return (
    <footer className="footer-section inspired-layout">
      <div className="footer-content">
        <div className="footer-logo">Abu'bakr</div>
        <nav className="footer-nav">
          <a href="#">Accueil</a>
          <a href="#">Services</a>
          <a href="#">À Propos</a>
          <a href="#">Portfolio</a>
          <a href="#">Contactez-Moi</a>
        </nav>
        <div className="footer-socials">
          <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="icon-btn" />
            </a>
            <a href="mailto:ton.email@example.com" aria-label="Email">
              <HiOutlineMail className="icon-btn" />
            </a>
            <a href="https://www.linkedin.com/in/ton-profil/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="icon-btn" />
            </a>
        </div>
        <div className="footer-contact">
          <span><i className="fa fa-envelope" style={{marginRight:'8px'}}></i> samakeabubakr3@gmail.com</span>
          <span style={{marginLeft:'24px'}}><i className="fa fa-phone" style={{marginRight:'8px'}}></i> +223 62 02 59 94</span>
        </div>
        <hr className="footer-divider" />
        <div className="footer-copy">Designed by @abubakr.samaké Développeur fullstack</div>
      </div>
    </footer>
  );
}

export default Footer;