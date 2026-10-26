// src/components/home/StorySection.tsx
'use client';

import Link from "next/link";

export default function Story() {
  return (
    <div className="about-strip" id="about">
      <div className="about-inner">

        <div className="about-text">
          <h2>
            Where Music &amp; Dance Find Their Soul
          </h2>

          <span className="hindi-h">
            जहाँ संगीत और नृत्य को आत्मा मिलती है
          </span>

          <h3>Aadi Shakti Sangeet Sadhana</h3>

          <p>
            Aadi Shakti Sangeet Sadhana is a premier institute dedicated to
            preserving and promoting the rich traditions of Indian classical
            music and dance. Rooted in tradition and guided by a deep respect
            for our cultural heritage, we nurture students of all ages through
            disciplined and heartfelt learning.
          </p>

          <p>
            Our academy bridges the ancient and the contemporary, honouring
            India&apos;s rich cultural heritage while making classical music
            and dance accessible, engaging, and meaningful for every student.
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
            <div className="num">20+</div>
            <div className="lbl">Teachers</div>
          </div>

          <div className="stat-box">
            <div className="num">1000+</div>
            <div className="lbl">Students Trained</div>
          </div>

          <div className="stat-box">
            <div className="num">6+</div>
            <div className="lbl">Centers</div>
          </div>

          <div className="stat-box">
            <div className="num">10+</div>
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