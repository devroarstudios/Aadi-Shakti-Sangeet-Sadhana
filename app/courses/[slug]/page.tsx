import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { courses } from "@/data/courses";

import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/course-details.css";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="course-page">

        {/* Hero Section */}
        <section className="course-hero">

          <div className="course-image">
            <img
              src={course.image}
              alt={course.title}
            />
          </div>

          <div className="course-content">

            <h1>{course.title}</h1>

            <h2>{course.hindi}</h2>

            <p className="course-short">
              {course.description}
            </p>

            <div className="course-tags">
              {course.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

          </div>

        </section>

        {/* Details */}
        <section className="course-details">

          {course.about && (
            <div className="course-section">
              <h3>About the Course</h3>
              <p>{course.about}</p>
            </div>
          )}

          {course.levels && (
            <div className="course-section">
              <h3>Course Levels</h3>
              <p>{course.levels}</p>
            </div>
          )}

          {course.duration && (
            <div className="course-section">
              <h3>Class Duration</h3>
              <p>{course.duration}</p>
            </div>
          )}

          {course.curriculum && course.curriculum.length > 0 && (
            <div className="course-section">
              <h3>Curriculum</h3>

              <ul className="curriculum-list">
                {course.curriculum.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {course.examination && (
            <div className="course-section">
              <h3>{course.examination.title}</h3>

              <ol>
                {course.examination.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          )}

          {course.syllabus && course.syllabus.length > 0 && (
            <div className="course-section">

              <h3>Examination Pattern & Syllabus Coverage</h3>

              <div className="table-wrapper">
                <table className="course-table">

                  <thead>
                    <tr>
                      <th>Academic Level</th>
                      <th>Internal Syllabus</th>
                      <th>Internal Duration</th>
                      <th>External Syllabus</th>
                      <th>External Duration</th>
                      <th>Total Duration</th>
                    </tr>
                  </thead>

                  <tbody>
                    {course.syllabus.map((row) => (
                      <tr key={row.level}>
                        <td>{row.level}</td>
                        <td>{row.internalSyllabus}</td>
                        <td>{row.internalDuration}</td>
                        <td>{row.externalSyllabus}</td>
                        <td>{row.externalDuration}</td>
                        <td>{row.totalDuration}</td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

            </div>
          )}

          <div className="course-cta">
            <a href="/contact" className="enquire-btn">
              Enquire Now
            </a>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}