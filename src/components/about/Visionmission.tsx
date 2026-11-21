// src/components/about/VisionMission.tsx

export default function VisionMission() {
  return (
    <section className="vm-section">
      <div className="vm-inner">

        <div className="section-header">
          <span className="eyebrow">Our Purpose</span>
          <h2>Vision & Mission</h2>
          <span className="hindi">दृष्टि और दमशन</span>

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
              To become Navi Mumbai’s most trusted destination for Indian classical arts, where learners of all ages and backgrounds can discover their artistic potential, express their creativity, and develop a lasting connection with India’s rich cultural heritage. Preserve Traditions Honour and sustain the timeless legacy of Indian classical arts. Nurture Artistic Excellence Develop skilled, confident, and expressive artists. Inspire Lifelong Passion Cultivate a lasting love and appreciation for music and dance.
            </p>

            <div className="vm-tags">
              <span className="vm-tag">Preserve Traditions</span>
              <span className="vm-tag">Build Artists</span>
              <span className="vm-tag">Inspire Lifelong Love</span>
            </div>
          </div>

          <div className="vm-card">
            <h3>Our Mission</h3>
            <span className="vm-hindi-label">हमारा दमशन</span>

            <p>
              To provide accessible, high-quality education in Indian classical arts by upholding the values of the Guru-Shishya parampara while embracing engaging, contemporary teaching methods. We strive to nurture disciplined, confident, and expressive students who combine technical excellence with a deep understanding and heartfelt appreciation of their art. Authentic Classical Training Build a strong foundation through dedicated practice and traditional teaching. Performance & Stage Confidence Provide opportunities for students to showcase their skills and grow through stage experience. An Inclusive Learning Community Create a welcoming environment where learners from all ages and backgrounds can explore, learn, and thrive.
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