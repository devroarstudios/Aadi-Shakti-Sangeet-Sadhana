// src/components/about/FounderStory.tsx

export default function FounderStory() {
  return (
    <div className="fs-section">
      <div className="fs-inner">

        <div className="section-header">
          <span className="eyebrow">Our Founder</span>
          <h2>A Life Dedicated to the Arts</h2>
          <span className="hindi">कला के प्रति समर्पित जीवन</span>
          <div className="divider">
            <span></span>
            <div className="dia"></div>
            <span></span>
          </div>
        </div>

        <div className="fs-grid">

          {/* LEFT CARD — Born from Devotion */}
          <div className="fs-card fs-card--white">
            <h3 className="fs-card-title">Born from Devotion</h3>
            <span className="hindi-label">साधना से जन्मी</span>

            <p className="fs-card-body fs-card-body--mb">
              Aadi Shakti Sangeet Sadhana was founded on a deeply held belief:
              that music and dance are more than artistic pursuits — they are
              a way of life. Inspired by the primordial divine feminine energy
              that animates all creation, our academy is dedicated to
              preserving and sharing the rich traditions of Indian classical
              arts in Navi Mumbai.
            </p>

            <p className="fs-card-body">
              Our founder began their journey in Indian classical arts during
              childhood, learning under accomplished gurus through the
              traditional Guru-Shishya parampara. Years of dedicated riyaaz,
              stage performances, and a profound spiritual connection to the
              arts inspired a defining question: How can this timeless
              knowledge be passed on to the next generation?
            </p>
          </div>

          {/* RIGHT CARD — Built with Discipline */}
          <div className="fs-card fs-card--cream">
            <h3 className="fs-card-title">Built with Discipline</h3>
            <span className="hindi-label">अनुशासन से निर्मित</span>

            <p className="fs-card-body fs-card-body--mb">
              What began as a vision grew into Aadi Shakti Sangeet Sadhana,
              with centres in Ulwe and Kharghar, Navi Mumbai. Today, the
              academy nurtures over a hundred students across generations
              and backgrounds, guiding them in their artistic and personal
              growth through the discipline and beauty of Indian classical
              arts.
            </p>

            <div className="fs-quote-block">
              <p className="fs-quote-text">
                &ldquo;When you surrender to the raga and your body becomes
                one with the dance, art transcends technique and becomes
                prayer. That is the essence of our teaching.&rdquo;
              </p>

              <span className="fs-quote-attr">
                — Founder, Aadi Shakti Sangeet Sadhana
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}