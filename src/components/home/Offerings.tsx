import { courses } from "@/data/courses";

export default function Offerings() {
  return (
    <section
      id="courses"
      style={{
        padding: "5rem 2rem",
        background: "#ffffff",
      }}
    >
      <div className="courses-inner">
        <div className="section-header">
          <span className="eyebrow">What We Offer</span>

          <h2 className="simple-title">
            Music and Dance Academy
          </h2>

          <span className="hindi">
            संगीत और नृत्य अकादमी
          </span>

          <div className="divider">
            <span></span>
            <div className="dia"></div>
            <span></span>
          </div>
        </div>

        <div className="courses-grid">
          {courses.map((item) => (
            <div
              key={item.title}
              className="course-card"
            >
              <h3>{item.title}</h3>

              <span className="hindi-label">
                {item.hindi}
              </span>

              <p>{item.description}</p>

              <div className="course-tags">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                  >
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