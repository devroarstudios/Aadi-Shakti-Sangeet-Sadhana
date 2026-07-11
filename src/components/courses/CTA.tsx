export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-inner">

        <span className="cta-eyebrow">
          Admissions Open
        </span>

        <h2 className="cta-title">
          Join a Batch Today
        </h2>

        <span className="cta-hindi">
          आज ही एक बैच से जुड़ें
        </span>

        <p className="cta-text">
          Seats are limited in every batch. Reach out today to enquire
          about availability, timings and fees for the course of your
          choice.
        </p>

        <div className="cta-buttons">

          <a href="/contact" className="cta-btn-red">
            Enquire Now
          </a>

          <a
            href="https://wa.me/919137405818"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-outline"
          >
            WhatsApp Us
          </a>

        </div>

      </div>
    </section>
  );
}