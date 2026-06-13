// src/components/about/Enquire.tsx

import Link from "next/link";

export default function Enquire() {
  return (
    <section id="enquire" className="enquire-section">
      <div className="enquire-inner">

        <span className="eyebrow">Get in Touch</span>

        <h2>
          Ready to Begin
          <br />
          Your Journey?
        </h2>

        <span className="enquire-hindi">
          अपनी यात्रा शुरू करने के लिए तैयार हैं?
        </span>

        <p className="enquire-copy">
          Join hundreds of students discovering the transformative power of
          Indian classical music and dance at Aadi Shakti Sangeet Sadhana.
        </p>

        <div className="enquire-buttons">

          <a href="#" className="btn-red">
  Enquire Now
</a>

          <Link href="/#courses" className="btn-outline-white">
            View All Courses
          </Link>

          <a
            href="https://wa.me/919137405818"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            WhatsApp Us
          </a>

        </div>
      </div>
    </section>
  );
}