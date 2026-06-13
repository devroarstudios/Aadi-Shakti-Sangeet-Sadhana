import { pastHighlights } from "@/data/pasthighlights";

export default function PastHighlights() {
  return (
    <section className="past-section">
      <div className="past-inner">

        <div className="past-header">
          <span className="past-eyebrow">
            Looking Back
          </span>

          <h2>Past Highlights</h2>

          <span className="past-hindi">
            बीते पलों की यादें
          </span>

          <div className="past-divider">
            <span></span>
            <div className="past-dia"></div>
            <span></span>
          </div>
        </div>

        <div className="past-grid">

          {pastHighlights.map((item) => (
            <div
              key={item.title}
              className="past-card"
            >
              <span className="past-badge">
                {item.badge}
              </span>

              <h3>{item.title}</h3>

              <div className="past-info">

                <div className="past-row">
                  <span className="past-icon">◆</span>
                  <span>{item.description}</span>
                </div>

                <div className="past-row">
                  <span className="past-icon">◆</span>
                  <span>{item.location}</span>
                </div>

                <div className="past-row">
                  <span className="past-icon">◆</span>
                  <span>{item.category}</span>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}