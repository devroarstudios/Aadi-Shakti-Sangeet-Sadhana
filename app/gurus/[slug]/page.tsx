import { teamMembers } from "@/data/team";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function GuruPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guru = teamMembers.find((member) => member.slug === slug);

  if (!guru) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="guru-page">
          <div className="guru-container">
            {/* Guru Image */}
            <div className="guru-image">
              <img src={guru.altImage || guru.image} alt={guru.name} />
            </div>

            {/* Guru Content */}
            <div className="guru-content">
              <span className="guru-label">Our Guru</span>

              <h1>{guru.name}</h1>

              <h3>{guru.role}</h3>

              <p className="guru-role-hindi">{guru.roleHindi}</p>

              <div className="guru-divider">
                <span></span>
                <div></div>
                <span></span>
              </div>

              {/* Biography */}
              <p className="guru-bio">{guru.fullBio}</p>

              {/* Video Section */}
              <section className="guru-video-section">
                <h2>Performance & Journey</h2>

                <p>
                  Watch the artistic journey and performances of {guru.name}.
                </p>

                <div className="guru-video-container">
                  <video controls playsInline poster="/images/video-poster.jpg">
                    <source
                      src="/videos/guru-performance.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
