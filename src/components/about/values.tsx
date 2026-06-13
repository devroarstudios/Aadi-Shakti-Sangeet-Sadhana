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

          <div className="value-card">
            <div className="value-number">I</div>

            <h3>Sacred Practice</h3>

            <span className="value-hindi">
              साधना
            </span>

            <p>
              We approach every class as a devotional act.
              Music and dance are not performances —
              they are offerings.
            </p>
          </div>

          <div className="value-card">
            <div className="value-number">II</div>

            <h3>Joyful Learning</h3>

            <span className="value-hindi">
              आनंदमय शिक्षा
            </span>

            <p>
              Discipline and delight are not opposites.
              Our classrooms are alive with warmth,
              encouragement and joy.
            </p>
          </div>

          <div className="value-card">
            <div className="value-number">III</div>

            <h3>Cultural Heritage</h3>

            <span className="value-hindi">
              सांस्कृतिक विरासत
            </span>

            <p>
              We are custodians of India's classical arts
              tradition. Every lesson honours the lineage
              of the masters before us.
            </p>
          </div>

          <div className="value-card">
            <div className="value-number">IV</div>

            <h3>Inclusive Community</h3>

            <span className="value-hindi">
              समावेशी समुदाय
            </span>

            <p>
              Age, background, experience level —
              none of it matters. The arts belong to
              everyone. All are welcome here.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}