export interface Center {
  slug: string;
  name: string;
  logo: string;

  tagline: string;

  address: string;

  phone: string;
  alternatePhone?: string;
  phoneHref: string;

  hours: string;

  about: string[];

  vision: string;

  mission: string[];

  courses: string[];

  affiliation: string;

  motto: string;
  images: string[];

}

export const centers: Center[] = [
  {
    slug: "ulwe",

    name: "Aadi Shakti Sangeet Sadhana - Ulwe",

    logo: "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786791479/aadi_shakti_logo_vdlulk.webp",

    images: [
    "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786791894/keyboard_egei9b.png",
    "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786791894/kids_kathak_phixx1.png",
    "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786791892/sitar_opd4pc.png",
    "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786791892/tabla_coordz.png",
  ],

    tagline: "Preserving Heritage Through Music and Dance",

    address:
      "Shop 1, Plot 25, Sector 9,Tejas Symphony, Ulwe",

    phone: "+91 91374 05818",
    phoneHref: "tel:+91 91374 05818",

    hours: "Morning & Evening Batches",

    about: [
      "Aadi Shakti Sangeet Sadhana is a premier institution dedicated to preserving, promoting, and nurturing the rich traditions of Indian Classical Music and Dance.",

      "Located in Ulwe, Raigad District, Maharashtra, the Ulwe branch was established on 1 April 2023 under the blessings of Smt. Rekha Pandey and Shri Janardan Pandey.",

      "Led by Shri Ankit Kumar Pandey, the academy has grown from nearly 50 students to a vibrant community of more than 500 students."
    ],

    vision:
      "To preserve and promote the timeless heritage of Indian Classical Music and Dance while inspiring future generations to embrace India's artistic traditions.",

    mission: [
      "Provide authentic training in Indian Classical Music and Dance.",
      "Uphold the Guru–Shishya Parampara.",
      "Nurture disciplined, confident and culturally rooted artists.",
      "Encourage artistic excellence through performances and continuous learning."
    ],

    courses: [
      "Kathak",
      "Hindustani Classical Vocal",
      "Tabla",
      "Harmonium",
      "Sitar",
      "Keyboard",
      "Guitar",
      "Dholak"
    ],

    affiliation:
      "Affiliated with Pracheen Kala Kendra, Chandigarh.",

    motto:
      "Preserving Heritage • Inspiring Excellence • Creating Artists for Tomorrow"
  },

  {
    slug: "kharghar",

    name: "Aadi Shakti Sangeet Sadhana - Kharghar",

    logo: "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786791479/aadi_shakti_logo_vdlulk.webp",

    images: [
    "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786791894/keyboard_egei9b.png",
    "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786791894/kids_kathak_phixx1.png",
    "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786791892/sitar_opd4pc.png",
    "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786791892/tabla_coordz.png",
  ],

    tagline: "From Values to Devotion, From Devotion to Mastery",

    address:
      "Shop 22, Green Heritage, Plot 79/80, Sector 20 Kharghar — 410210",

    phone: "+91 91377 86462",
    phoneHref: "tel:+91 91377 86462",

    hours: "Morning & Evening Batches",

    about: [
      "Located in Kharghar, Navi Mumbai, Maharashtra, the Kharghar branch of Aadi Shakti Sangeet Sadhana was established on 1 December 2024 under the blessings of Smt. Rekha Pandey and Shri Janardan Pandey.",

      "Led by Shri Ankit Kumar Pandey, the academy has grown into a vibrant learning community serving more than 500 students across its branches.",

      "The academy continues to preserve India's rich heritage of Indian Classical Music and Dance through quality education and cultural excellence."
    ],

    vision:
      "To preserve and promote the timeless heritage of Indian Classical Music and Dance while inspiring future generations to embrace India's artistic traditions with pride and excellence.",

    mission: [
      "Provide authentic training in Indian Classical Music and Dance.",
      "Uphold the Guru–Shishya Parampara.",
      "Nurture disciplined, confident and culturally rooted artists.",
      "Encourage artistic excellence through performances and continuous learning."
    ],

    courses: [
      "Kathak (Indian Classical Dance)",
      "Hindustani Classical Vocal",
      "Tabla",
      "Harmonium",
      "Sitar",
      "Keyboard",
      "Guitar",
      "Dholak"
    ],

    affiliation:
      "Affiliated with Pracheen Kala Kendra, Chandigarh. Students follow a structured curriculum leading to nationally recognised certifications.",

    motto:
      "From Values to Devotion, From Devotion to Mastery.\n\nPreserving Heritage • Inspiring Excellence • Creating Artists for Tomorrow"
  }
];