import Skills from '../compoment/Skills';
import '../css/about.css'
function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">A propos</h2>
      <p className="about-subtitle">Développeur Full-Stack Web, Mobile & Desktop</p>
      <div className="about-content-row">
        <div className="about-photo-bg">
          <img src="./images/about-img.png" alt="Profile" className="about-photo" />
        </div>
        <div className="about-description">
          <p>
            Développeur full-stack passionné, je conçois et développe des applications web, mobiles et desktop, en prenant en charge l’ensemble du cycle de développement : de l’interface utilisateur jusqu’à l’architecture serveur.
            Grâce à une expertise polyvalente, je suis capable de créer des solutions performantes, modernes et intuitives, parfaitement adaptées aux besoins des utilisateurs. Je travaille aussi bien sur le front-end que 
            sur le back-end, en passant par le mobile (Android/iOS) et les applications desktop multiplateformes.
            Mon objectif : livrer des produits robustes, maintenables, et agréables à utiliser – que ce soit pour une startup, une entreprise, ou un projet personnel ambitieux.
          </p>
          <a href="#" className="btn-primary about-cv-btn" download>Download CV</a>
        </div>
      </div>
      
      <Skills />
    </section>
  );
}

export default About;