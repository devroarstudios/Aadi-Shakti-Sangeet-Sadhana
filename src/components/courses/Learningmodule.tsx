export default function LearningModule() {
  return (
    <section className="learning-module">
      <div className="learning-module-inner">

        <div className="section-header">
          <span className="eyebrow">How We Teach</span>

          <h2>Learning Modes</h2>

          <span className="hindi">शिक्षण के तरीके</span>

          <div className="divider">
            <span></span>
            <div className="dia"></div>
            <span></span>
          </div>
        </div>

        <div className="learning-grid">

          <div className="learning-card">
            <h3>Offline Classes</h3>

            <span className="hindi-label">
              ऑफलाइन कक्षाएं
            </span>

            <p>
              Our in-person classes at Kharghar and Ulwe are the heart of
              the academy. Students benefit from the energy of a real
              classroom, direct correction by the guru, and the community
              of fellow learners. Morning and evening batches run Monday
              through Saturday to suit every schedule.
            </p>

            <div className="course-tags">
              <span className="tag">In-Person</span>
              <span className="tag">Kharghar & Ulwe</span>
              <span className="tag">Mon – Sat</span>
              <span className="tag">Morning & Evening</span>
            </div>
          </div>

          <div className="learning-card">
            <h3>Online Classes</h3>

            <span className="hindi-label">
              ऑनलाइन कक्षाएं
            </span>

            <p>
              For students who cannot attend in person, we offer live
              virtual sessions over video call — providing the same
              personalised instruction, feedback and connection with the
              guru from the comfort of home. Ideal for outstation students
              or those with busy schedules.
            </p>

            <div className="course-tags">
              <span className="tag">Live Virtual Sessions</span>
              <span className="tag">Flexible Timing</span>
              <span className="tag">All Courses</span>
              <span className="tag">Any Location</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}