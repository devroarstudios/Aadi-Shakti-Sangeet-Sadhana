import Link from "next/link";
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
            <Link
              key={item.slug}
              href={`/courses/${item.slug}`}
              className="course-card"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
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

              <div className="course-readmore">
  <span className="read-more-btn course-readmore-btn">
    Read More
  </span>
</div>
              
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}