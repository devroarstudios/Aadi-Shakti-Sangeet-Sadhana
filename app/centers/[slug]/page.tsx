import { centers } from "@/data/centers";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/centers-detail.css";

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

      <main className="centers-detail-page">
        {/* Hero */}
        <section className="centers-detail-hero">
          <div className="centers-detail-hero-inner">
            <div className="centers-detail-logo">
              <img src={center.logo} alt={center.name} />
            </div>

            <div className="centers-detail-content">
              <span className="centers-detail-eyebrow">
                OUR CENTRE
              </span>

              <h1>{center.name}</h1>

              <h2>{center.tagline}</h2>

              <div className="centers-detail-divider"></div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="centers-detail-body">

          <div className="centers-detail-section">
            <h3>About Us</h3>

            {center.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="centers-detail-section">
            <h3>Our Vision</h3>

            <p>{center.vision}</p>
          </div>

          <div className="centers-detail-section">
            <h3>Our Mission</h3>

            <ul className="centers-detail-list">
              {center.mission.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="centers-detail-section">
            <h3>Courses Offered</h3>

            <ul className="centers-detail-list">
              {center.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>

          <div className="centers-detail-section">
            <h3>Academic Affiliation</h3>

            <p>{center.affiliation}</p>
          </div>

          <div className="centers-detail-section">
            <h3>Our Motto</h3>

            <p>{center.motto}</p>
          </div>

          <div className="centers-detail-section">
            <h3>Contact Information</h3>

            <p>{center.address}</p>

            <p>{center.phone}</p>

            {center.alternatePhone && (
              <p>{center.alternatePhone}</p>
            )}

            <p>{center.hours}</p>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}