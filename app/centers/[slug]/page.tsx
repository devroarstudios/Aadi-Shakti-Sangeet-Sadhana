import { centers } from "@/data/centers";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/affiliated-details.css";

export default async function CenterDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const center = centers.find((item) => item.slug === slug);

  if (!center) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="center-page">
        {/* =========================
            HERO
        ========================= */}

        <section className="center-hero">
          <div className="center-hero-inner">
            {/* center Logo */}
            <div className="center-logo-box">
              <img src={center.logo} alt={center.name} />
            </div>

            {/* center Information */}
            <div className="center-content">
              <span className="center-eyebrow">OUR center</span>

              <h1>{center.name}</h1>

              <h2>{center.tagline}</h2>

              <div className="center-divider"></div>
            </div>
          </div>
        </section>

        {/* =========================
            center IMAGE GALLERY
        ========================= */}

        <section className="center-gallery">
          <div className="center-gallery-grid">
            {center.images.map((image, index) => (
              <div className="center-gallery-item" key={image}>
                <img
                  src={image}
                  alt={`${center.name} - Image ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            CONTENT
        ========================= */}

        <section className="center-details">
          {/* About Us */}

          <div className="center-section">
            <h3>About Us</h3>

            {center.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Vision */}

          <div className="center-section">
            <h3>Our Vision</h3>

            <p>{center.vision}</p>
          </div>

          {/* Mission */}

          <div className="center-section">
            <h3>Our Mission</h3>

            <ul className="center-list">
              {center.mission.map((item) => (
                <li key={item}>
                  <span className="bullet"></span>

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}

          <div className="center-section">
            <h3>Courses Offered</h3>

            <ul className="center-list">
              {center.courses.map((course) => (
                <li key={course}>
                  <span className="bullet"></span>

                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Affiliation */}

          <div className="center-section">
            <h3>Academic Affiliation</h3>

            <p>{center.affiliation}</p>
          </div>

          {/* Motto */}

          <div className="center-section">
            <h3>Our Motto</h3>

            <p>{center.motto}</p>
          </div>

          {/* Contact */}

          <div className="center-section">
            <h3>Contact Information</h3>

            <p>{center.address}</p>

            <p>{center.phone}</p>

            {center.alternatePhone && <p>{center.alternatePhone}</p>}

            <p>{center.hours}</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
