import { teamMembers } from "@/data/team";

export default function Team() {
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

        <div className="team-grid">
          {teamMembers.map((member) => (
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
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}