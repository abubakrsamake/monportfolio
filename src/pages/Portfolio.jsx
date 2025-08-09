import React, { useState } from "react";
import '../css/portfolio.css'
import { projectsData } from "../data/projectsData";


const categories = [
  { label: "All", value: "all" },
  { label: "Website Design", value: "website" },
  { label: "App Mobile Design", value: "mobile" },
  { label: "App Desktop", value: "desktop" },
  { label: "Branding", value: "branding" }
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
            </div>
            <div className="portfolio-card-info">
              <div className="portfolio-card-title">{project.name}</div>
              <div className="portfolio-card-category">Categories</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;