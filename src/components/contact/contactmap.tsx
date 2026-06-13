export default function ContactMap() {
  return (
    <section className="contact-map-section">
      <div className="contact-map-inner">

        <div className="contact-map-header">
          <span className="contact-map-eyebrow">
            Directions
          </span>

          <h2>Find Us on the Map</h2>

          <span className="contact-map-hindi">
            हमें मानचित्र पर खोजें
          </span>

          <div className="contact-map-divider">
            <span></span>
            <div className="contact-map-dia"></div>
            <span></span>
          </div>
        </div>

        <div className="contact-map-grid">

          {/* KHARGHAR */}

          <div className="contact-map-card">
            <span className="contact-map-badge">
              Kharghar Center
            </span>

            <h3>Aadi Shakti Kharghar</h3>

            <div className="contact-map-info">

              <div className="contact-map-row">
                <span className="contact-map-icon">📍</span>

                <span>
                  Shop 22, Green Heritage, Plot 79/80,
                  Sector 20, Kharghar — 410210
                </span>
              </div>

            </div>

            <iframe
  title="Kharghar Center Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.259435187906!2d73.06611278000781!3d19.052327736115682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c21c10215e71%3A0xca80fcb8e24bdf5f!2sShop%2022%2C%20Green%20Heritage%20Apartment%2C%20GREEN%20HERITAGE%2C%2079%2C%20Sector%2020%2C%20Kharghar%2C%20Panvel%2C%20Maharashtra%20410210!5e0!3m2!1sen!2sin!4v1781335356107!5m2!1sen!2sin"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="contact-map-frame"
/>
          </div>

          {/* ULWE */}

          <div className="contact-map-card">
            <span className="contact-map-badge">
              Ulwe Center
            </span>

            <h3>Aadi Shakti Ulwe</h3>

            <div className="contact-map-info">

              <div className="contact-map-row">
                <span className="contact-map-icon">📍</span>

                <span>
                  Shop 1, Plot 25, Sector 9,
                  Tejas Symphony, Ulwe,
                  Navi Mumbai
                </span>
              </div>

            </div>

            <iframe
  title="Ulwe Center Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1020524051646!2d73.0150951751451!3d18.971099882211984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b7b249b739f7329%3A0x40b5d2c88ff478c8!2sAadi%20Shakti%20Sangeet%20Kala%20Kendra!5e0!3m2!1sen!2sin!4v1781335458986!5m2!1sen!2sin"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="contact-map-frame"
/>
          </div>

        </div>

      </div>
    </section>
  );
}