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

        {/* Hero */}

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

        {/* About */}

        <section className="center-details">

          <div className="center-section">

            <h3>About the Centre</h3>

            {center.about.map((text) => (
              <p key={text}>{text}</p>
            ))}

          </div>

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


          <div className="center-section">

            <h3>Contact Information</h3>

            <p>{center.address}</p>

            <p>{center.phone}</p>

            <p>{center.alternatePhone}</p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}