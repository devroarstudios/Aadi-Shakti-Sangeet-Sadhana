export interface AffiliatedCenter {
  slug: string;
  name: string;
  logo: string;

  address: string;
  phone: string;
  alternatePhone?: string;
  phoneHref: string;
  hours: string;

  tagline: string;

  about: string[];

  courses: string[];

  events: string[];
}

export const affiliatedCenters: AffiliatedCenter[] = [
  {
    slug: "ninaad",

    name: "Ninaad",

    logo: "https://res.cloudinary.com/dcaiszxcb/image/upload/v1783336782/NINAAD_1_-1_woghrz.png",

    tagline: "Discover Your Rhythm, Ignite Your Soul",

    about: [
      "Welcome to Ninaad Dance and Music Academy.",
      "We believe that art is the ultimate form of self-expression. Our academy is a vibrant space designed to unlock your creative potential and bring your artistic dreams to life. Through structured training and professional guidance, we help students master the subtle nuances of both classical and contemporary art forms, shaping passionate learners into confident performers.",
      "Our classes cater to all generations and skill levels, from young children discovering their first beat to adults reconnecting with their love for music and dance. Led by passionate instructors, our curriculum focuses on building strong foundations, technical precision, and a genuine emotional connection with the art.",
      "We don't just teach techniques—we nurture a lifelong love for rhythm and melody. Join the Ninaad family today to experience the joy of performance, lasting friendships, and step onto a stage where your talents truly shine. Your artistic journey begins here.",
    ],

    courses: [
      "Kathak",
      "Semi-Classical Dance",
      "Bollywood Dance",
      "Folk Dance",
      "Vocal Music",
      "Guitar",
      "Harmonium",
      "Keyboard",
      "Tabla",
    ],

    events: [
      "Ninaad – Annual Cultural Festival",
      "Tihayi – A Special Cultural Showcase Held Twice a Year",
    ],

    address:
      "Bhavya Studio, 43/348 Unnat Nagar – 4, M. G. Road, Near Jain Nursing Home, Goregaon West, Mumbai – 400104",

    phone: "+91 86520 44111",

    phoneHref: "tel:+918652044111",

    hours: "Regular & Weekend Batches Available",
  },

  {
    slug: "nrutya-sadhana",

    name: "Nrutya Sadhana",

    logo: "https://res.cloudinary.com/dcaiszxcb/image/upload/v1783336774/nrutya_chujyn.png",

    tagline: "Where Rhythm Meets Grace and Expression",

    about: [
      "Welcome to Nrutya-Sadhana School of Dance and Music.",
      "At Nrutya-Sadhana School of Dance and Music, we are dedicated to preserving, promoting, and nurturing the rich heritage of Indian classical arts and music. Our institution provides an inspiring and supportive environment where students can explore the beauty of Kathak and Indian music, transforming passion into excellence.",
      "Whether you are a beginner taking your first steps or an experienced learner seeking to refine your skills, our qualified and experienced faculty guide students through the intricacies of rhythm, expression, melody, and performance.",
      "We strive to cultivate creativity, discipline, confidence, and a deep appreciation for India's cultural traditions. We warmly welcome aspiring artists to embark on a meaningful artistic journey with us—where every step tells a story, every movement expresses emotion, and every note celebrates our rich cultural heritage.",
    ],

    courses: [
      "Kathak",
      "Semi-Classical Dance",
      "Bollywood Dance",
      "Folk Dance",
      "Vocal Music",
      "Guitar",
      "Harmonium",
      "Keyboard",
      "Tabla",
    ],

    events: [
      "Ghungroo – Annual Cultural Festival",
      "Utpatti – A Special Cultural Showcase Held Twice a Year",
    ],

    address:
      "SCO 10, First Floor, Riverdale Business Centre, Highland Marg, Opposite Riverdale Apartments, Near Air Force Station, Zirakpur, Punjab – 140603",

    phone: "+91 95604 22455",

    alternatePhone: "+91 98706 93616",

    phoneHref: "tel:+919560422455",

    hours: "Mon – Sat | Morning & Evening Batches Available",
  },
];