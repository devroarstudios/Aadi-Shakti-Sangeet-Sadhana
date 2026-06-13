import Image from 'next/image';
import { galleryImages } from '@/data/gallery';

export default function GalleryPreview() {
  return (
    <div id="gallery" className="gallery-section">
      <div className="gallery-inner">

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

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="gallery-item"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={250}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}