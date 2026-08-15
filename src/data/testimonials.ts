export interface Testimonial {
  image: string;
  name: string;
  course: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786783872/Nabonita_das-fixed_jk2zfz.png",
    name: "Nabonita Das",
    course: "Classical Vocal Student",
    review:
      "Learning Hindustani music here has transformed my confidence, discipline and appreciation for Indian classical traditions.",
  },
  {
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786783923/Rishi_Shankar-fixed_bkxrdj.png",
    name: "Rishi Shankar",
    course: "Dance Student",
    review:
      "The teachers are incredibly supportive and every class feels deeply connected to tradition while remaining enjoyable.",
  },
  {
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786783997/Rupali_kaul-fixed_zigog3.png",
    name: "Rupali Kaul",
    course: "Semi-Classical Vocal",
    review:
      "The academy has given me a strong musical foundation and helped me grow both artistically and personally.",
  },
  {
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786783995/Swati_singh-fixed_iornim.png",
    name: "Swati Singh",
    course: "Dance Student",
    review:
      "A beautiful environment for learning. The guidance from the gurus is patient, encouraging and inspiring.",
  },
];