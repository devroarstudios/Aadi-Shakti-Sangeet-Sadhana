export default function Examination() {
  return (
    <section className="exam-section">
      <div className="exam-inner">

        <div className="exam-header">
          <span className="exam-eyebrow">
            Assessment & Progress
          </span>

          <h2>Examination System</h2>

          <span className="exam-hindi">
            परीक्षा प्रणाली
          </span>

          <div className="exam-divider">
            <span></span>
            <div className="exam-dia"></div>
            <span></span>
          </div>
        </div>

        <div className="exam-grid">

          <div className="exam-card">
            <h3>Internal Examinations</h3>

            <span className="exam-hindi-label">
              आंतरिक परीक्षाएं
            </span>

            <p>
              Conducted by the academy at the end of each term,
              internal examinations assess a student's progress
              in technical skills, theoretical understanding and
              performance quality. Graded feedback is provided
              to help students and families track development
              clearly and plan the path forward. These assessments
              are conducted in a warm, supportive environment
              that encourages growth rather than anxiety.
            </p>

            <div className="exam-tags">
              <span className="exam-tag">Termly</span>
              <span className="exam-tag">Graded Feedback</span>
              <span className="exam-tag">Theory & Practice</span>
              <span className="exam-tag">All Courses</span>
            </div>
          </div>

          <div className="exam-card">
            <h3>External Examinations</h3>

            <span className="exam-hindi-label">
              बाहरी परीक्षाएं
            </span>

            <p>
              For students seeking formal recognition, Aadi
              Shakti Sangeet Sadhana facilitates entry into
              examinations conducted by recognised classical
              arts examination boards. These board-affiliated
              assessments result in nationally acknowledged
              certificates that validate a student's classical
              training, open doors to higher-level courses and
              carry weight in academic and cultural institutions
              across India.
            </p>

            <div className="exam-tags">
              <span className="exam-tag">
                Board-Affiliated
              </span>

              <span className="exam-tag">
                National Certification
              </span>

              <span className="exam-tag">
                Recognised Credentials
              </span>

              <span className="exam-tag">
                Optional
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}