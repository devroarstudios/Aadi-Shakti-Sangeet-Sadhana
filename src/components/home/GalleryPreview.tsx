import { galleryImages } from "@/data/gallery1";

export default function GalleryPreview() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-inner">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="section-header">

          <span className="eyebrow">
            Moments Captured
          </span>

          <h2>
            Gallery
          </h2>

          <span className="hindi">
            दीर्घा
          </span>

          <div className="divider">
            <span></span>
            <div className="dia"></div>
            <span></span>
          </div>

        </div>


        {/* =========================
            GALLERY GRID
        ========================= */}

        <div className="gallery-grid">

          {galleryImages.slice(0, 8).map((image, index) => (

            <div
              key={`${image.image}-${index}`}
              className="gallery-item"
            >

              <img
                src={image.image}
                alt={image.alt}
                className="gallery-preview-image"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}