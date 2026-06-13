export interface Testimonial {
  image: string;
  name: string;
  course: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    name: "Priya Kulkarni",
    course: "Classical Vocal Student",
    review:
      "Learning Hindustani music here has transformed my confidence, discipline and appreciation for Indian classical traditions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    name: "Rohan Patil",
    course: "Dance Student",
    review:
      "The teachers are incredibly supportive and every class feels deeply connected to tradition while remaining enjoyable.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    name: "Aarohi Deshmukh",
    course: "Semi-Classical Vocal",
    review:
      "The academy has given me a strong musical foundation and helped me grow both artistically and personally.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    name: "Aditya Joshi",
    course: "Dance Student",
    review:
      "A beautiful environment for learning. The guidance from the gurus is patient, encouraging and inspiring.",
  },
];