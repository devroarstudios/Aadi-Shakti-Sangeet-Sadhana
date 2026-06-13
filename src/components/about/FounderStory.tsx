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

          {/* LEFT CARD — white background */}
          <div className="fs-card fs-card--white">
            <h3 className="fs-card-title">Born from Devotion</h3>
            <span className="hindi-label">साधना से जन्मी</span>
            <p className="fs-card-body fs-card-body--mb">
              Aadi Shakti Sangeet Sadhana was founded with a single, sacred
              conviction: that{' '}
              <strong className="fs-strong">
                music and dance are not hobbies — they are a way of being.
              </strong>{' '}
              Named after the primordial divine feminine energy that animates
              all creation, our academy exists to keep this living tradition
              alive and accessible in Navi Mumbai.
            </p>
            <p className="fs-card-body">
              Our founder began their journey in Indian classical arts as a
              child, trained under accomplished gurus in the Guru-Shishya
              parampara. Years of rigorous riyaaz, stage performances, and a
              deep spiritual connection to the art form led to one defining
              question: how do we bring this gift to the next generation?
            </p>
          </div>

          {/* RIGHT CARD — cream background */}
          <div className="fs-card fs-card--cream">
            <h3 className="fs-card-title">Built with Discipline</h3>
            <span className="hindi-label">अनुशासन से निर्मित</span>
            <p className="fs-card-body fs-card-body--mb">
              The answer was Aadi Shakti Sangeet Sadhana — first established
              in Kharghar, and later expanded to Ulwe. Today, the academy
              serves over a hundred students of all ages and backgrounds.
            </p>
            <div className="fs-quote-block">
              <p className="fs-quote-text">
                &ldquo;When you surrender to the raga, when your body becomes
                the dance — that is when art becomes prayer. That is what we
                teach here.&rdquo;
              </p>
              <span className="fs-quote-attr">— Founder, Aadi Shakti</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}