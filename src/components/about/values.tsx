// src/components/about/Values.tsx

export default function Values() {
  return (
    <section className="values-section">
      <div className="values-inner">

        <div className="section-header values-header">
          <span className="eyebrow values-eyebrow">
            What We Stand For
          </span>

          <h2 className="values-title">
            Our Values
          </h2>

          <span className="hindi values-hindi">
            हमारे मूल्य
          </span>

          <div className="divider values-divider">
            <span></span>
            <div className="dia"></div>
            <span></span>
          </div>
        </div>

        <div className="values-grid">

          {/* I. Sacred Practice */}
          <div className="value-card">
            <div className="value-number">I.</div>

            <h3>Sacred Practice</h3>

            <span className="value-hindi">
              साधना
            </span>

            <p>
              We approach every class as an opportunity for devotion and
              self-expression. For us, music and dance go beyond performance —
              they become offerings of dedication, discipline, and devotion.
            </p>
          </div>

          {/* II. Joyful Learning */}
          <div className="value-card">
            <div className="value-number">II.</div>

            <h3>Joyful Learning</h3>

            <span className="value-hindi">
              आनंदमय दशक्षा
            </span>

            <p>
              We believe discipline and joy go hand in hand. Our learning
              environment encourages curiosity, builds confidence, and
              inspires students to grow through warmth, positivity, and
              encouragement.
            </p>
          </div>

          {/* III. Cultural Heritage */}
          <div className="value-card">
            <div className="value-number">III.</div>

            <h3>Cultural Heritage</h3>

            <span className="value-hindi">
              सांस्कृतिक दक धरोहर
            </span>

            <p>
              We are committed to preserving and passing on the rich traditions
              of Indian classical arts. Every lesson honours the wisdom of the
              gurus and the artistic lineage that has shaped these timeless
              traditions.
            </p>
          </div>

          {/* IV. Inclusive Community */}
          <div className="value-card">
            <div className="value-number">IV.</div>

            <h3>Inclusive Community</h3>

            <span className="value-hindi">
              समावेशी समुदाय
            </span>

            <p>
              We believe the arts are for everyone, regardless of age,
              background, or experience. We welcome every learner into a
              supportive community where each individual has the opportunity
              to explore, learn, and grow.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}