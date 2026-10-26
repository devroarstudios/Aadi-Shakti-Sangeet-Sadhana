// src/components/about/Journey.tsx

export default function Journey() {
  return (
    <section className="journey-section">
      <div className="journey-inner">

        <div className="section-header">
          <span className="eyebrow journey-eyebrow">
            Our Story
          </span>

          <h2 className="journey-title">
            The Journey So Far
          </h2>

          <span className="hindi">
            हमारी यात्रा
          </span>

          <div className="divider">
            <span></span>
            <div className="dia"></div>
            <span></span>
          </div>
        </div>

        <div className="journey-grid">

          {/* 1. First Classes in Ulwe */}
          <div className="journey-card">
            <span className="journey-badge">
              The Beginning
            </span>

            <h3>First Classes in ULWE</h3>

            <div className="journey-info">
              <div className="journey-row">
                <span className="journey-icon">◆</span>
                <span>
                  Aadi Shakti Sangeet Sadhana opens its doors in Tejas
                  Symphony, Shop No. 1, Sector 9, Ulwe, with the first
                  batch of students and their families who dared to
                  believe in the dream.
                </span>
              </div>
            </div>
          </div>

          {/* 2. Expanding Courses and Batches */}
          <div className="journey-card">
            <span className="journey-badge">
              Growing Roots
            </span>

            <h3>Expanding Courses &amp; Batches</h3>

            <div className="journey-info">
              <div className="journey-row">
                <span className="journey-icon">◆</span>
                <span>
                  New batches for ladies and adults added. Curriculum
                  broadens to include classical vocal, semi-classical
                  dance, and Bollywood singing, something for every
                  aspiration.
                </span>
              </div>
            </div>
          </div>

          {/* 3. Annual Student Showcase */}
          <div className="journey-card">
            <span className="journey-badge">
              First Recital
            </span>

            <h3>Annual Student Showcase</h3>

            <div className="journey-info">
              <div className="journey-row">
                <span className="journey-icon">◆</span>
                <span>
                  Students take the stage for the first annual showcase,
                  a momentous milestone. Families, teachers, and the
                  community unite in celebration of young talent.
                </span>
              </div>
            </div>
          </div>

          {/* 4. Second Centre in Kharghar */}
          <div className="journey-card">
            <span className="journey-badge">
              Second Center
            </span>

            <h3>Aadi Shakti Opens in Kharghar</h3>

            <div className="journey-info">
              <div className="journey-row">
                <span className="journey-icon">◆</span>
                <span>
                  Growing demand leads to our second center in
                  Kharghar, Green Heritage, Shop No. 22, Sector 20,
                  bringing classical arts closer to even more families
                  across Navi Mumbai.
                </span>
              </div>
            </div>
          </div>

          {/* 5. Growing Community */}
          <div className="journey-card">
            <span className="journey-badge">
              1000+ Students
            </span>

            <h3>A Thriving Community</h3>

            <div className="journey-info">
              <div className="journey-row">
                <span className="journey-icon">◆</span>
                <span>
                  The academy crosses a landmark of over 1000 active
                  students across the centers. A living, breathing
                  community of artists, families, and lifelong learners.
                </span>
              </div>
            </div>
          </div>

          {/* 6. Current Admissions */}
          <div className="journey-card">
            <span className="journey-badge">
              Today &amp; Beyond
            </span>

            <h3>Admissions Open 2026–27</h3>

            <div className="journey-info">
              <div className="journey-row">
                <span className="journey-icon">◆</span>
                <span>
                  We continue to grow, inspire, and teach with new
                  batches, new courses, and the same unwavering
                  dedication to Indian classical music and dance.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}