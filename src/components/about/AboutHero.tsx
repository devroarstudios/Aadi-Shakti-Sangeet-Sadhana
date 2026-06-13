// src/components/about/AboutHero.tsx


export default function AboutHero() {
  return (
    <div className="about-strip">
      <div className="about-inner">

        <div className="about-text">
          <span className="about-breadcrumb">Home › About Us</span>
          <h2>
            The Story of<br />Aadi Shakti
          </h2>
          <span className="hindi-h">आदि शक्ति संगीत साधना</span>
          <p>
            Named after the primordial divine feminine energy, our academy is a
            sanctuary where music and dance are not merely skills — they are a
            sacred practice, a way of life.
          </p>
          <p>
            With two thriving centers in Navi Mumbai — Kharghar and Ulwe — we
            nurture students of all ages, backgrounds and experience levels in
            the rich traditions of Indian classical arts.
          </p>
          <p>
            Our teaching philosophy blends rigorous classical training with
            joyful, modern pedagogy — creating artists who are both technically
            accomplished and spiritually connected to their art.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <div className="num">2</div>
            <div className="lbl">Centers</div>
          </div>
          <div className="stat-box">
            <div className="num">6+</div>
            <div className="lbl">Courses</div>
          </div>
          <div className="stat-box">
            <div className="num">100+</div>
            <div className="lbl">Students</div>
          </div>
          <div className="stat-box">
            <div className="num">∞</div>
            <div className="lbl">Passion</div>
          </div>
        </div>

      </div>
    </div>
  );
}