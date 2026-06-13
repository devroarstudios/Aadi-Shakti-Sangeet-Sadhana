"use client";

import { useState } from "react";
import { galleryImages } from "@/data/gallery1";

export default function GalleryMoment() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeFilter
        );

  return (
    <section className="gallery-moment-wrapper">
      <div className="gallery-moment-inner">

        {/* SECTION HEADER */}

        <div className="gallery-section-header">
          <span className="gallery-eyebrow">
            Our Moments
          </span>

          <h2>Life at Aadi Shakti</h2>

          <span className="gallery-hindi">
            आदि शक्ति में जीवन
          </span>

          <div className="gallery-divider">
            <span></span>
            <div className="dia"></div>
            <span></span>
          </div>
        </div>

        {/* FILTERS */}

        <div className="gallery-filter-wrapper">

          <button
            className={`gallery-filter-button ${
              activeFilter === "all" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>

          <button
            className={`gallery-filter-button ${
              activeFilter === "annual" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("annual")}
          >
            Annual Function
          </button>

          <button
            className={`gallery-filter-button ${
              activeFilter === "celebrities" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("celebrities")}
          >
            Celebrities
          </button>

          <button
            className={`gallery-filter-button ${
              activeFilter === "classes" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("classes")}
          >
            Classes
          </button>

          <button
            className={`gallery-filter-button ${
              activeFilter === "events" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("events")}
          >
            Events
          </button>

        </div>

        {/* GALLERY GRID */}

        <div className="gallery-moment-grid">

          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="gallery-moment-item"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="gallery-moment-image"
              />
            </div>
          ))}

        </div>

        {/* FOOTNOTE */}

        <p className="gallery-moment-note">
          Gallery is updated regularly. Follow us on Instagram for the latest.
        </p>

      </div>
    </section>
  );
}