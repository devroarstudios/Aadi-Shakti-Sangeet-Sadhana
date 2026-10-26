// src/components/about/AboutHero.tsx

export default function AboutHero() {
  return (
    <div className="about-strip">
      <div className="about-inner">

        <div className="about-text">
          <span className="about-breadcrumb">Home › About Us</span>

          <h2>
            The Story of Aadi Shakti
          </h2>

          <span className="hindi-h">
            आदि शक्ति संगीत साधना
          </span>

          <p>
            Inspired by the primordial divine feminine energy, Aadi Shakti
            Sangeet Sadhana is a space where music and dance become more than
            artistic disciplines — they become a journey of devotion,
            expression, and self-discovery.
          </p>

          <p>
            With two centres in Navi Mumbai, located in Ulwe and Kharghar, we
            welcome learners of all ages, backgrounds, and skill levels into
            the timeless world of Indian classical arts.
          </p>

          <p>
            Our teaching philosophy combines authentic classical training
            with an engaging, contemporary approach, nurturing students to
            develop technical excellence, artistic expression, and a deeper
            connection with the cultural and spiritual roots of their art.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <div className="num">20+</div>
            <div className="lbl">Teachers</div>
          </div>

          <div className="stat-box">
            <div className="num">1000+</div>
            <div className="lbl">Students Trained</div>
          </div>

          <div className="stat-box">
            <div className="num">6+</div>
            <div className="lbl">Centers</div>
          </div>

          <div className="stat-box">
            <div className="num">10+</div>
            <div className="lbl">Courses Offered</div>
          </div>
        </div>

      </div>
    </div>
  );
}