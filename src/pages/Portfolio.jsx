import React, { useState } from "react";
import '../css/portfolio.css'
import { projectsData } from "../data/projectsData";


const categories = [
  { label: "Tous", value: "all" },
  { label: "Sites Web", value: "website" },
  { label: "Applications Mobiles", value: "mobile" },
  { label: "Applications Desktop", value: "desktop" },
  { label: "Backend/API", value: "backend" }
];


function Portfolio() {
  const [selected, setSelected] = useState("all");

  const filteredProjects =
    selected === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selected);

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={
              "portfolio-filter-btn" + (selected === cat.value ? " active" : "")
            }
            onClick={() => setSelected(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <div className="portfolio-img-wrap">
              <img src={project.image} alt={project.name} className="portfolio-img" />
              <div className="portfolio-overlay">
                <div className="portfolio-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    GitHub
                  </a>
                  <a href={project.demo} className="portfolio-link">
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-card-info">
              <div className="portfolio-card-title">{project.name}</div>
              <div className="portfolio-card-description">{project.description}</div>
              <div className="portfolio-technologies">
                {project.technologies && project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;