import "@/styles/Partner.css";


export default function Partner() {
  return (
    <section className="partner-section">
      <div className="partner-container">

        <div className="partner-layout">

          <div className="partner-content">

            <span className="partner-eyebrow">
              Grow With Us
            </span>

            <h2>
              Partner with
              <br />
              Aadi Shakti
            </h2>

            <span className="partner-hindi">
              साझेदारी करें
            </span>

            <p>
              We welcome passionate educators and institutions who share our
              commitment to preserving and propagating Indian classical arts.
              Becoming an affiliated center means joining a growing family of
              academies united by a common vision.
            </p>

            <p>
              Affiliated centers benefit from the Aadi Shakti brand, our proven
              curriculum, access to certified guru training, and ongoing support
              from our headquarters. You bring the space and dedication — we
              bring the system and the standards.
            </p>

            <p>
              Whether you are an experienced teacher looking to formalize your
              practice or an institution seeking to introduce classical arts, we
              have a pathway for you. Write to us or call either of our centers
              to begin a conversation.
            </p>

            <div className="partner-buttons">

              <a
                href="#"
                className="partner-btn-red"
              >
                Enquire Now
              </a>

              <a
                href="/contact"
                className="partner-btn-outline"
              >
                Contact Us
              </a>

            </div>

          </div>

          <div className="partner-benefits">

            <div className="partner-card">
              <div className="partner-card-title">
                Curriculum
              </div>

              <div className="partner-card-text">
                Proven classical arts curriculum refined over years of teaching
                across two centers.
              </div>
            </div>

            <div className="partner-card">
              <div className="partner-card-title">
                Brand
              </div>

              <div className="partner-card-text">
                Use the Aadi Shakti name, identity and reputation to build trust
                in your local community.
              </div>
            </div>

            <div className="partner-card">
              <div className="partner-card-title">
                Training
              </div>

              <div className="partner-card-text">
                Certified guru training and ongoing pedagogical support from our
                experienced faculty.
              </div>
            </div>

            <div className="partner-card">
              <div className="partner-card-title">
                Community
              </div>

              <div className="partner-card-text">
                Join a network of like-minded educators and participate in joint
                events and showcases.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}