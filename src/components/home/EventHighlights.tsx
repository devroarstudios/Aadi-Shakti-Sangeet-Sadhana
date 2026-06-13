import { videos } from "@/data/events";

export default function EventHighlights() {
  return (
    <section id="events" className="events-section">
      <div className="events-inner">

        <div className="events-header">
          <span className="events-eyebrow">
            Event Highlights
          </span>

          <h2>
            Our Performances &amp; Events
          </h2>

          <span className="events-hindi">
            हमारे कार्यक्रम और प्रस्तुतियाँ
          </span>

          <div className="events-divider">
            <span></span>
            <div className="events-dia"></div>
            <span></span>
          </div>
        </div>

        <div className="youtube-grid">
          {videos.map((video) => (
            <div key={video.id} className="yt-card">

              <div className="yt-thumb">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="yt-info">
                <h4>{video.title}</h4>

                <div className="yt-channel">
                  {video.channel}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="yt-cta">
          <a
            href="https://youtube.com/@aadishaktisangeetsadhana"
            target="_blank"
            rel="noopener noreferrer"
            className="events-btn-red"
          >
            View All on YouTube →
          </a>
        </div>

      </div>
    </section>
  );
}