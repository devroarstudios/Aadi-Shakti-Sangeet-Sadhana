import { teamMembers } from "@/data/team";
import Link from "next/link";

export default function Team() {
  const featuredMembers = teamMembers.slice(0, 2);
  const otherMembers = teamMembers.slice(2);

  return (
    <div id="team" className="team-section">
      <div className="team-inner">

        <div className="section-header">
          <span className="eyebrow">Our Gurus</span>

          <h2>Meet the Team</h2>

          <span className="hindi">
            हमारी टीम से मिलें
          </span>

          <div className="divider">
            <span></span>
            <div className="dia"></div>
            <span></span>
          </div>
        </div>

        {/* Featured Members */}

        <div className="featured-team">

          {featuredMembers.map((member) => (
            <div
              key={member.name}
              className="featured-card"
            >
              <div className="featured-avatar">
                <img
                  src={member.image}
                  alt={member.name}
                />
              </div>

              <h3>{member.name}</h3>

              <div className="role-en">
                {member.role}
              </div>

              <div className="role">
                {member.roleHindi}
              </div>

              <p>{member.bio}</p>

              <Link
                href={`/gurus/${member.slug}`}
                className="read-more-btn"
              >
                Read More
              </Link>
            </div>
          ))}

        </div>

        {/* Remaining Team Members */}

        <div className="team-grid">

          {otherMembers.map((member) => (
            <div
              key={member.name}
              className="team-card"
            >
              <div className="team-avatar">
                <img
                  src={member.image}
                  alt={member.name}
                />
              </div>

              <h4>{member.name}</h4>

              <div className="role-en">
                {member.role}
              </div>

              <div className="role">
                {member.roleHindi}
              </div>

              <p>{member.bio}</p>

              <Link
                href={`/gurus/${member.slug}`}
                className="read-more-btn"
              >
                Read More
              </Link>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}