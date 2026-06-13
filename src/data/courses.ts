export interface Course {
  title: string;
  hindi: string;
  description: string;
  tags: string[];
}

export const courses: Course[] = [
  {
    title: "Kids Dance Classes",
    hindi: "बाल नृत्य कक्षाएं",
    description:
      "Specially designed for young learners, building rhythm, coordination and artistic expression through joyful movement.",
    tags: ["Classical", "Semi-Classical", "Age 4+"],
  },
  {
    title: "Ladies Dance Classes",
    hindi: "महिला नृत्य कक्षाएं",
    description:
      "A graceful journey into the beauty of Indian dance traditions — for beginners to intermediate learners, all welcome.",
    tags: ["Classical", "Semi-Classical", "All Levels"],
  },
  {
    title: "Kids Vocal Classes",
    hindi: "बाल संगीत कक्षाएं",
    description:
      "Structured vocal training for children to develop ear, pitch, breath control and a deep love for Indian classical music.",
    tags: ["Classical", "Semi-Classical", "Age 5+"],
  },
  {
    title: "Adult Vocal Classes",
    hindi: "प्रौढ़ संगीत कक्षाएं",
    description:
      "Unlock the power of your voice. Learn raagas, bhajans and compositions with personalised guidance at your pace.",
    tags: ["Classical", "Semi-Classical", "All Ages"],
  },
  {
    title: "Music Production",
    hindi: "संगीत निर्माण",
    description:
      "Learn to compose, arrange and produce music digitally — blending classical foundations with modern production techniques.",
    tags: ["Digital", "Composition", "Intermediate"],
  },
  {
    title: "Bollywood Singing",
    hindi: "बॉलीवुड गायन",
    description:
      "Master the art of Bollywood vocals — from filmy classics to contemporary hits — with guided training in style and performance.",
    tags: ["Bollywood", "Performance", "All Levels"],
  },
];