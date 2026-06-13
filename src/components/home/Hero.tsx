'use client';

import { useState, useEffect, useCallback } from 'react';

interface Slide {
  id: number;
  bgClass: string;

  tag: string;
  title: string;
  hindi: string;
  copy: string;
  course: string;
}

const slides: Slide[] = [
  {
    id: 0,
    bgClass: 's1',
    tag: 'For Children · बच्चों के लिए',
    title: 'Kids Dance\nClasses',
    hindi: 'बाल नृत्य कक्षाएं',
    copy: "Classical & Semi-Classical Dance. Nurture your child's grace, rhythm and expression through the timeless art of Indian classical dance.",
    course: 'Kids Dance Classes',
  },
  {
    id: 1,
    bgClass: 's2',
    tag: 'For Ladies · महिलाओं के लिए',
    title: 'Ladies Dance\nClasses',
    hindi: 'महिला नृत्य कक्षाएं',
    copy: 'Classical & Semi-Classical Dance. Express yourself through the timeless beauty and elegance of Indian classical dance traditions.',
    course: 'Ladies Dance Classes',
  },
  {
    id: 2,
    bgClass: 's3',
    tag: 'For Children · बच्चों के लिए',
    title: 'Kids Vocal\nClasses',
    hindi: 'बाल संगीत कक्षाएं',
    copy: "Classical & Semi-Classical Vocal. Let your child's voice bloom with the sacred discipline of Indian classical music from an early age.",
    course: 'Kids Vocal Classes',
  },
  {
    id: 3,
    bgClass: 's4',
    tag: 'For Adults · वयस्कों के लिए',
    title: 'Adult Vocal\nClasses',
    hindi: 'वयस्क संगीत कक्षाएं',
    copy: 'Classical & Semi-Classical Vocal. Discover the depth of Indian classical music and awaken your inner voice — at any age, at your pace.',
    course: 'Adult Vocal Classes',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const goToSlide = useCallback((n: number) => {
    setCurrent(n);
  }, []);

  const changeSlide = useCallback((d: number) => {
    setCurrent((prev) => (prev + d + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const auto = setInterval(() => {
      changeSlide(1);
    }, 5000);

    return () => clearInterval(auto);
  }, [changeSlide]);

  return (
    <>
      <div className="slider-section">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`slide${current === i ? ' active' : ''}`}
            id={`slide-${slide.id}`}
          >
            <div className={`slide-bg-color ${slide.bgClass}`} />

            <div className="slide-left-border" />

            <div className="slide-content">
              <div className="slide-left">
                <div className="slide-tag">{slide.tag}</div>

                <div className="slide-title">
                  {slide.title.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < slide.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>

                <div className="slide-hindi">{slide.hindi}</div>
              </div>

              <div className="slide-right">
                <p className="slide-copy">{slide.copy}</p>

                <button
                  className="btn-learn"
                  onClick={() => {
                    console.log(slide.course);
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          className="slider-arrow prev"
          onClick={() => changeSlide(-1)}
          aria-label="Previous slide"
        >
          &#8592;
        </button>

        <button
          className="slider-arrow next"
          onClick={() => changeSlide(1)}
          aria-label="Next slide"
        >
          &#8594;
        </button>

        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot${current === i ? ' active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}