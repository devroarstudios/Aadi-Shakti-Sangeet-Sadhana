'use client';

import { useEffect, useState } from 'react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const auto = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(auto);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonial-section">

      <div className="team-inner">

        <div className="section-header">
          <span className="eyebrow">
            Testimonials
          </span>

          <h2>
            Voices of Our Students
          </h2>

          <span className="hindi">
            हमारे विद्यार्थियों की आवाज़
          </span>

          <div className="divider">
            <span></span>
            <div className="dia"></div>
            <span></span>
          </div>
        </div>

        <div className="testimonial-slider">

          <button
            className="testimonial-arrow prev"
            onClick={prevSlide}
          >
            ←
          </button>

          <div className="testimonial-card">

            <div className="testimonial-avatar">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
              />
            </div>

            <h4>
              {testimonials[current].name}
            </h4>

            <div className="course">
              {testimonials[current].course}
            </div>

            <p>
              "{testimonials[current].review}"
            </p>

            <div className="stars">
              ★★★★★
            </div>

          </div>

          <button
            className="testimonial-arrow next"
            onClick={nextSlide}
          >
            →
          </button>

        </div>

      </div>

    </section>
  );
}