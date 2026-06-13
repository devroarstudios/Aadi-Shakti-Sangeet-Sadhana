export default function Syllabus() {
  return (
    <section className="syllabus-section">
      <div className="syllabus-inner">

        <div className="syllabus-header">
          <span className="syllabus-eyebrow">
            What You Will Learn
          </span>

          <h2>Course Syllabus</h2>

          <span className="syllabus-hindi">
            पाठ्यक्रम विवरण
          </span>

          <div className="syllabus-divider">
            <span></span>
            <div className="syllabus-dia"></div>
            <span></span>
          </div>
        </div>

        <div className="syllabus-grid">

          {/* 1 */}
          <div className="syllabus-card">
            <h3>Kids Dance Classes</h3>
            <span className="syllabus-label">बाल नृत्य कक्षाएं</span>

            <p>
              <strong>Year 1 — Foundations:</strong> Basic body posture,
              taal awareness, simple mudras and introductory footwork
              sequences. Building joy and confidence through movement.

              <br /><br />

              <strong>Year 2 — Development:</strong> Layered compositions,
              semi-classical elements, rhythm patterns and short
              choreographies for group performance.

              <br /><br />

              <strong>Year 3 — Performance:</strong> Full-length stage
              pieces, expressive abhinaya, costume and stagecraft —
              preparing students for their first public recital.
            </p>

            <div className="syllabus-tags">
              <span className="syllabus-tag">3-Year Programme</span>
              <span className="syllabus-tag">Age 4+</span>
              <span className="syllabus-tag">
                Beginner to Intermediate
              </span>
            </div>
          </div>

          {/* 2 */}
          <div className="syllabus-card">
            <h3>Ladies Dance Classes</h3>
            <span className="syllabus-label">महिला नृत्य कक्षाएं</span>

            <p>
              <strong>Year 1 — Foundations:</strong> Classical posture,
              basic tala, introductory adavus and the grammar of Indian
              classical dance.

              <br /><br />

              <strong>Year 2 — Development:</strong> Varnam, padam and
              semi-classical forms. Building expressive range and ensemble
              coordination.

              <br /><br />

              <strong>Year 3 — Performance:</strong> Solo and group stage
              presentations, deeper exploration of rasa and abhinaya,
              preparation for external assessments.
            </p>

            <div className="syllabus-tags">
              <span className="syllabus-tag">3-Year Programme</span>
              <span className="syllabus-tag">All Ages</span>
              <span className="syllabus-tag">All Levels</span>
            </div>
          </div>

          {/* 3 */}
          <div className="syllabus-card">
            <h3>Kids Vocal Classes</h3>
            <span className="syllabus-label">बाल संगीत कक्षाएं</span>

            <p>
              <strong>Year 1 — Foundations:</strong> Swar gyan, basic
              sargam, sur-taal training and introductory compositions.

              <br /><br />

              <strong>Year 2 — Development:</strong> Deeper raaga
              understanding, alankaars, bandishes and light classical
              compositions.

              <br /><br />

              <strong>Year 3 — Performance:</strong> Structured recital
              preparation, vilambit and drut compositions, stage presence
              and examination readiness.
            </p>

            <div className="syllabus-tags">
              <span className="syllabus-tag">3-Year Programme</span>
              <span className="syllabus-tag">Age 5+</span>
              <span className="syllabus-tag">
                Hindustani Classical
              </span>
            </div>
          </div>

          {/* 4 */}
          <div className="syllabus-card">
            <h3>Adult Vocal Classes</h3>
            <span className="syllabus-label">प्रौढ़ संगीत कक्षाएं</span>

            <p>
              <strong>Year 1 — Foundations:</strong> Swar, shruti,
              sargam and basic raaga introduction.

              <br /><br />

              <strong>Year 2 — Development:</strong> Multiple raagas,
              bandishes, bhajans and semi-classical thumri.

              <br /><br />

              <strong>Year 3 — Performance:</strong> Personal repertoire,
              deeper raaga elaboration and examination preparation.
            </p>

            <div className="syllabus-tags">
              <span className="syllabus-tag">3-Year Programme</span>
              <span className="syllabus-tag">All Ages</span>
              <span className="syllabus-tag">All Levels</span>
            </div>
          </div>

          {/* 5 */}
          <div className="syllabus-card">
            <h3>Music Production</h3>
            <span className="syllabus-label">संगीत निर्माण</span>

            <p>
              <strong>Year 1 — Foundations:</strong> Introduction to DAW,
              recording workflow and basic mixing.

              <br /><br />

              <strong>Year 2 — Development:</strong> Advanced arrangement,
              vocal production and sound design.

              <br /><br />

              <strong>Year 3 — Performance:</strong> Full production
              projects, mastering and portfolio development.
            </p>

            <div className="syllabus-tags">
              <span className="syllabus-tag">3-Year Programme</span>
              <span className="syllabus-tag">Studio</span>
              <span className="syllabus-tag">Advanced</span>
            </div>
          </div>

          {/* 6 */}
          <div className="syllabus-card">
            <h3>Bollywood Singing</h3>
            <span className="syllabus-label">बॉलीवुड गायन</span>

            <p>
              <strong>Year 1 — Foundations:</strong> Classical vocal
              base, ear training and diction.

              <br /><br />

              <strong>Year 2 — Development:</strong> Expanding repertoire,
              microphone technique and interpretation.

              <br /><br />

              <strong>Year 3 — Performance:</strong> Stage and studio
              performance, competitions and showcases.
            </p>

            <div className="syllabus-tags">
              <span className="syllabus-tag">3-Year Programme</span>
              <span className="syllabus-tag">
                Film & Semi-Classical
              </span>
              <span className="syllabus-tag">All Levels</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}