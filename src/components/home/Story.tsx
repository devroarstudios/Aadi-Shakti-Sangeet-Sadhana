// src/components/home/StorySection.tsx
'use client';
import Link from "next/link";

export default function Story() {
  return (
    <div className="about-strip" id="about">
      <div className="about-inner">

        <div className="about-text">
          <h2>
            Where Music &amp; Dance
            <br />
            Find Their Soul
          </h2>

          <span className="hindi-h">
            जहाँ संगीत और नृत्य को आत्मा मिलती है
          </span>

          <p>
            Aadi Shakti Sangeet Sadhana is a premier institute dedicated to the
            preservation and propagation of Indian classical arts. Founded with a
            deep reverence for tradition, we nurture students of all ages through
            disciplined, heart-centred learning.
          </p>

          <p>
            Our academy bridges the ancient and the contemporary honouring the
            roots of our rich cultural heritage while making classical music and
            dance accessible, joyful and transformative for every student who
            walks through our doors.
          </p>

          <Link
  href="/contact"
  className="btn-learn"
  style={{ marginTop: "1.5rem", display: "inline-flex" }}
>
  Enquire Now
</Link>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <div className="num">12+</div>
            <div className="lbl">Years of Excellence</div>
          </div>

          <div className="stat-box">
            <div className="num">500+</div>
            <div className="lbl">Students Trained</div>
          </div>

          <div className="stat-box">
            <div className="num">2</div>
            <div className="lbl">Centers</div>
          </div>

          <div className="stat-box">
            <div className="num">6+</div>
            <div className="lbl">Courses Offered</div>
          </div>

          <Link href="/contact" className="btn-learn mobile-btn">
  Enquire Now
</Link>

        </div>

      </div>
    </div>
  );
}