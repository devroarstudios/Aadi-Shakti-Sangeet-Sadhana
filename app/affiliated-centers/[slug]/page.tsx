import { affiliatedCenters } from "@/data/affiliatedCenters";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/affiliated-details.css";

export default async function CenterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const center = affiliatedCenters.find(
    (item) => item.slug === slug
  );

  if (!center) notFound();

  return (
    <>
      <Navbar />

      <main className="center-page">

        {/* =========================
            HERO
        ========================= */}

        <section className="center-hero">

          <div className="center-hero-inner">

            <div className="center-logo-box">
              <img
                src={center.logo}
                alt={center.name}
              />
            </div>

            <div className="center-content">

              <span className="center-eyebrow">
                AFFILIATED CENTRE
              </span>

              <h1>{center.name}</h1>

              <h2>{center.tagline}</h2>

              <div className="center-divider"></div>

            </div>

          </div>

        </section>


        {/* =========================
            CENTRE IMAGE GALLERY
        ========================= */}

        <section className="center-gallery">

          <div className="center-gallery-grid">

            {center.images.map((image, index) => (

              <div
                className="center-gallery-item"
                key={index}
              >

                <img
                  src={image}
                  alt={`${center.name} - ${index + 1}`}
                />

              </div>

            ))}

          </div>

        </section>

        {/* =========================
    FACULTY / ARTIST
========================= */}

<section className="center-faculty">

  <div className="center-faculty-inner">

    <h3 className="center-faculty-title">
      Center Head
    </h3>

    {center.faculty.map((person) => (

      <div
        className="center-faculty-card"
        key={person.name}
      >

        {/* Artist Image */}

        <div className="center-faculty-image">

          <img
            src={person.image}
            alt={person.name}
          />

        </div>


        {/* Artist Information */}

        <div className="center-faculty-content">

          <h4>
            {person.name}
          </h4>

          <div className="center-faculty-designation">
            {person.designation}
          </div>


          {/* Biography */}

          <div className="center-faculty-bio">

            {person.bio.map((paragraph) => (

              <p key={paragraph}>
                {paragraph}
              </p>

            ))}

          </div>


          {/* Achievements */}

          {person.achievements.length > 0 && (

            <div className="center-faculty-achievements">

              <h5>
                Major Achievements & Highlights
              </h5>

              <ul>

                {person.achievements.map((achievement) => (

                  <li key={achievement}>
                    {achievement}
                  </li>

                ))}

              </ul>

            </div>

          )}

        </div>

      </div>

    ))}

  </div>

</section>


        {/* =========================
            CONTENT
        ========================= */}

        <section className="center-details">

          {/* About */}

          <div className="center-section">

            <h3>About the Centre</h3>

            {center.about.map((text) => (
              <p key={text}>
                {text}
              </p>
            ))}

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


          {/* Events */}

          <div className="center-section">

            <h3>Our Signature Events</h3>

            <ul className="center-list">

              {center.events.map((event) => (

                <li key={event}>

                  <span className="bullet"></span>

                  {event}

                </li>

              ))}

            </ul>

          </div>


          {/* Contact */}

          <div className="center-section">

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