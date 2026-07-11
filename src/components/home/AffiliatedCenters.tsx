import Image from "next/image";
import { affiliatedCenters } from "@/data/affiliatedCenters";

export default function AffiliatedCenters() {
  return (
    <section className="affiliated-section">
      <div className="centers-inner">

        <div className="centers-title">
          <span className="centers-eyebrow">
            Our Network
          </span>

          <h2>Affiliated Centers</h2>

          <span className="centers-hindi">
            संबद्ध केंद्र
          </span>

          <div className="divider">
            <span></span>
            <div className="dia"></div>
            <span></span>
          </div>
        </div>

     <div className="centers-grid">
  {affiliatedCenters.map((center) => (
    <div key={center.name} className="center-card">

      <div className="center-header">
        <Image
          src={center.logo}
          alt={center.name}
          width={60}
          height={60}
          className="center-logo"
        />
      </div>

      <h3>{center.name}</h3>

      <div className="center-info">

        <div className="center-row">
          <span className="ci">📍</span>
          <span>{center.address}</span>
        </div>

        <div className="center-row">
          <span className="ci">📞</span>

          <a href={center.phoneHref}>
            {center.phone}
          </a>
        </div>

        <div className="center-row">
          <span className="ci">⏰</span>
          <span>{center.hours}</span>
        </div>

      </div>

    </div>
  ))}
</div>

      </div>
    </section>
  );
}