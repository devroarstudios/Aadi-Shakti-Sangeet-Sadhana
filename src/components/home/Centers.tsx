import Link from "next/link";
import { centers } from "@/data/centers";

export default function Centers() {
  return (
    <section id="centers" className="centers-section">

      <div className="centers-inner">

        <div className="centers-title">

          <span className="centers-eyebrow">
            Find Us
          </span>

          <h2>
            Our Centers
          </h2>

          <span className="centers-hindi">
            हमारे केंद्र
          </span>

          <div className="divider">
            <span></span>
            <div className="dia"></div>
            <span></span>
          </div>

        </div>


        <div className="centers-grid">

          {centers.map((center) => (

            <div
              key={center.slug}
              className="center-card"
            >

              <h3>
                {center.name}
              </h3>


              <div className="center-info">


                <div className="center-row">
                  <span className="ci">
                    📍
                  </span>

                  <span>
                    {center.address}
                  </span>
                </div>



                <div className="center-row">

                  <span className="ci">
                    📞
                  </span>


                  <a href={center.phoneHref}>
                    {center.phone}
                  </a>

                </div>



                <div className="center-row">

                  <span className="ci">
                    ⏰
                  </span>

                  <span>
                    {center.hours}
                  </span>

                </div>


              </div>


             
              <Link
  href={`/centers/${center.slug}`}
  className="center-readmore"
>
  Read More
</Link>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}