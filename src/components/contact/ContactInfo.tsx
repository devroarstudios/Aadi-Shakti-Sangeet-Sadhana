export default function ContactInfo() {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">

        <div className="contact-info-grid">

          {/* LEFT SIDE */}
          <div>

            <div className="contact-section-header contact-left-header">
              <span className="contact-eyebrow">
                Enquire
              </span>

              <h2>Send Us a Message</h2>

              <span className="contact-hindi">
                हमें संदेश भेजें
              </span>

              <div className="contact-divider">
                <span></span>
                <div className="contact-dia"></div>
                <span></span>
              </div>
            </div>

            <div className="contact-form-wrapper">

              <div className="contact-field-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                />
              </div>

              <div className="contact-field-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="contact-field-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="contact-field-group">
                <label>Course Interested In</label>

                <select>
                  <option>Select a course...</option>
                  <option>Kids Dance Classes</option>
                  <option>Ladies Dance Classes</option>
                  <option>Kids Vocal Classes</option>
                  <option>Adult Vocal Classes</option>
                  <option>Music Production</option>
                  <option>Bollywood Singing</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div className="contact-field-group">
                <label>Preferred Center</label>

                <select>
                  <option>Kharghar</option>
                  <option>Ulwe</option>
                  <option>Either / Flexible</option>
                </select>
              </div>

              <div className="contact-field-group">
                <label>Message</label>

                <textarea placeholder="Tell us what you are looking for, any questions, or a convenient time to call..." />
              </div>

              <button className="contact-submit-btn">
                Send Enquiry →
              </button>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="contact-section-header contact-left-header">
              <span className="contact-eyebrow">
                Our Centers
              </span>

              <h2>Get in Touch</h2>

              <span className="contact-hindi">
                संपर्क विवरण
              </span>

              <div className="contact-divider">
                <span></span>
                <div className="contact-dia"></div>
                <span></span>
              </div>
            </div>

            <div className="contact-center-block">

              <span className="contact-center-badge">
                Kharghar Center
              </span>

              <div className="contact-address">

                <strong>
                  Aadi Shakti Kharghar
                </strong>

                Shop 22, Green Heritage, Plot 79/80,
                <br />
                Near Green Medical, Sector 20,
                <br />
                Kharghar, Navi Mumbai — 410210
                <br />

                <strong>Tel:</strong>

                <a href="tel:+919137786462">
                  +91 91377 86462
                </a>

                <br />

                <strong>Hours:</strong>
                Mon – Sat, Morning & Evening Batches

              </div>
            </div>

            <div className="contact-center-block">

              <span className="contact-center-badge">
                Ulwe Center
              </span>

              <div className="contact-address">

                <strong>
                  Aadi Shakti Ulwe
                </strong>

                Shop 1, Plot 25, Sector 9,
                <br />
                Tejas Symphony, Ulwe,
                <br />
                Navi Mumbai
                <br />

                <strong>Tel:</strong>

                <a href="tel:+919137405818">
                  +91 91374 05818
                </a>

                <br />

                <strong>Hours:</strong>
                Mon – Sat, Morning & Evening Batches

              </div>
            </div>

            <div className="contact-social-wrapper">

              <p>Follow Us</p>

              <div className="contact-social-buttons">

                <a
                  href="https://www.instagram.com/aadishaktisangeetsadhana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                >
                  Instagram
                </a>

                <a
                  href="https://youtube.com/@aadishaktisangeetsadhana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                >
                  YouTube
                </a>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}