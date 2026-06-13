import { upcomingEvents } from "@/data/upcomingevents";

export default function UpcomingEvents() {
  return (
    <section className="upcoming-section">
      <div className="upcoming-inner">

        <div className="upcoming-header">
          <span className="upcoming-eyebrow">
            Coming Soon
          </span>

          <h2>Upcoming Events</h2>

          <span className="upcoming-hindi">
            आगामी कार्यक्रम
          </span>

          <div className="upcoming-divider">
            <span></span>
            <div className="upcoming-dia"></div>
            <span></span>
          </div>
        </div>

        <p className="upcoming-note">
          Exact dates will be announced on our Instagram and
          YouTube. Follow us to be the first to know.
        </p>

        <div className="upcoming-grid">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="upcoming-card"
            >
              <h3>{event.title}</h3>

              <span className="upcoming-hindi-label">
                {event.hindi}
              </span>

              <p>{event.description}</p>

              <div className="upcoming-tags">
                {event.tags.map((tag) => (
                  <span key={tag} className="upcoming-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}