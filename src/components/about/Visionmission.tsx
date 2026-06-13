// src/components/about/VisionMission.tsx

export default function VisionMission() {
  return (
    <section className="vm-section">
      <div className="vm-inner">

        <div className="section-header">
          <span className="eyebrow">Our Purpose</span>
          <h2>Vision & Mission</h2>
          <span className="hindi">दृष्टि और मिशन</span>

          <div className="divider">
            <span></span>
            <div className="dia"></div>
            <span></span>
          </div>
        </div>

        <div className="vm-grid">

          <div className="vm-card">
            <h3>Our Vision</h3>
            <span className="vm-hindi-label">हमारी दृष्टि</span>

            <p>
              To be Navi Mumbai's most trusted center for Indian classical arts —
              a place where every student, regardless of age or background,
              can find their artistic voice and connect to India's timeless
              cultural heritage.
            </p>

            <div className="vm-tags">
              <span className="vm-tag">Preserve Traditions</span>
              <span className="vm-tag">Build Artists</span>
              <span className="vm-tag">Inspire Lifelong Love</span>
            </div>
          </div>

          <div className="vm-card">
            <h3>Our Mission</h3>
            <span className="vm-hindi-label">हमारा मिशन</span>

            <p>
              To provide accessible, high-quality classical arts education that
              honours the Guru-Shishya parampara while embracing joyful, modern
              pedagogy — shaping students who perform with technical mastery and
              heartfelt expression.
            </p>

            <div className="vm-tags">
              <span className="vm-tag">Classical Training</span>
              <span className="vm-tag">Stage Performance</span>
              <span className="vm-tag">Inclusive Community</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}