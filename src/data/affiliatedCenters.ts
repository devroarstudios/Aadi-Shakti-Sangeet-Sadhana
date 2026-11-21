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
  images: string[];
  faculty: {
    name: string;
    image: string;
    designation: string;
    bio: string[];
    achievements: string[];
  }[];
}

export const affiliatedCenters: AffiliatedCenter[] = [
  {
    slug: "nrutya-sadhana",
    name: "Nrutya Sadhana",
    logo: "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786791102/nrutya_chujyn_peqsfb.png",
    tagline: "Where Rhythm Meets Grace and Expression",
    images: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788399161/Screen_Shot_2026-09-01_at_10.51.54_AM_iq330y.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788399165/Screen_Shot_2026-09-01_at_10.51.20_AM_so7diw.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788399164/Screen_Shot_2026-09-01_at_10.52.25_AM_hsnjym.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788399162/Screen_Shot_2026-09-01_at_10.50.52_AM_rov3z3.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788399162/Screen_Shot_2026-09-01_at_10.53.33_AM_lstqus.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788399161/Screen_Shot_2026-09-01_at_10.51.34_AM_nx8ntf.png",
    ],
    faculty: [
      {
        name: "Paridhi Sharma Mehta",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1782372478/file_00000000bebc71fa960db2627b0624f5_1_i8lwkd.png",
        designation: "Kathak Guru & Choreographer",
        bio: [
          "Dedicated Kathak artiste, educator, and choreographer with over 12 years of experience in Indian classical dance and music.",
          "Senior disciple of Guru Shri Ankit Kumar Pandey, trained in Kathak and music at Aadi Shakti School of Music and Dance.",
          "Founder of Nrutya-Sadhana School of Dance and Music in Chandigarh, dedicated to promoting Indian classical arts and nurturing young talent.",
        ],
        achievements: [
          "Earned the prestigious Kathak Visharad degree from Pracheen Kala Kendra, Chandigarh.",
          "Established Nrutya-Sadhana School of Dance and Music in Chandigarh to promote Indian classical arts and nurture young talent.",
          "Successfully contributed to Indian classical dance and music for over 12 years as an artiste, educator, and choreographer.",
          "Continues to uphold and promote the traditional Guru-Shishya Parampara through teaching and artistic practice.",
        ],
      },
    ],
    about: [
      "Welcome to Nrutya-Sadhana School of Dance and Music.",
      "At Nrutya-Sadhana School of Dance and Music, we are dedicated to preserving, promoting, and nurturing the rich heritage of Indian classical arts and music. Our institution provides an inspiring and supportive environment where students can explore the beauty of Kathak and Indian music, transforming passion into excellence.",
      "Whether you are a beginner taking your first steps or an experienced learner seeking to refine your skills, our qualified and experienced faculty guide students through the intricacies of rhythm, expression, melody, and performance.",
      "We strive to cultivate creativity, discipline, confidence, and a deep appreciation for India's cultural traditions. We warmly welcome aspiring artists to embark on a meaningful artistic journey with us where every step tells a story, every movement expresses emotion, and every note celebrates our rich cultural heritage.",
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
      "SCO 10, First Floor, Riverdale Business center, Highland Marg, Opposite Riverdale Apartments, Near Air Force Station, Zirakpur, Punjab – 140603",
    phone: "+91 95604 22455",
    alternatePhone: "+91 98706 93616",
    phoneHref: "tel:+919560422455",
    hours: "Mon – Sat | Morning & Evening Batches Available",
  },

  {
    slug: "ninaad",
    name: "Ninaad",
    logo: "https://res.cloudinary.com/dcaiszxcb/image/upload/v1786791101/NINAAD_qzhlt6.png",
    tagline: "Discover Your Rhythm, Ignite Your Soul",
    images: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788399488/IMG-20260612-WA0038.jpg_xfj2n7.jpg",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788399487/20260611_174538.jpg_heeni1.jpg",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788399485/20260613_155329.jpg_wa1i1p.jpg",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788399484/IMG-20260527-WA0017.jpg_ugpgxk.jpg",
    ],
    faculty: [
      {
        name: "Renuka Agrawal",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1782371941/file_00000000df1871fa917eb4a9ef0ca7d9_1_jqghdg.png",
        designation:
          "Kathak Dancer • Vocalist • Choreographer • Folk Dance Specialist",
        bio: [
          "Renuka Agrawal is an accomplished Kathak artist, vocalist, choreographer, and educator with extensive training in Indian classical and folk performing arts.",
          "She holds a Master's Degree in Kathak, Sangeet Vid (Vocal), and a Two-Year Diploma in Folk Dance from Indira Kala Sangeet Vishwavidyalaya, Khairagarh, Chhattisgarh.",
          "She also holds a Master's Degree in Sanskrit from Dr. Harisingh Gour Vishwavidyalaya, Sagar, Madhya Pradesh.",
          "At present, she is undergoing advanced training in Hindustani Classical Music and Kathak under the esteemed guidance of Guru Shri Ankit Kumar Pandey, further enriching her artistic journey and deepening her understanding of the traditional Indian performing arts.",
        ],
        achievements: [
          "Recipient of the Young Artist Scholarship (1999–2000) in Kathak Dance.",
          "Represented India in a Cultural Exchange Program in Dubai (2006) through Folk Dance.",
          "Performed at Shilpgram Khajuraho Yuva Utsav and SCZCC, Nagpur.",
          "Choreographer for Republic Day Celebrations at Rajpath, New Delhi.",
          "Second Prize Winner at the 12th Yuva Sangeet Nritya Mahotsav, Ratnagiri.",
          "Runner-Up at the National Final Round in Vizianagaram, Andhra Pradesh.",
          "Choreographer for the 4th Military World Games, Hyderabad (2007).",
          "Associated with artistic and cultural productions including Bahar 2025.",
        ],
      },
    ],
    about: [
      "Welcome to Ninaad Dance and Music Academy.",
      "We believe that art is the ultimate form of self-expression. Our academy is a vibrant space designed to unlock your creative potential and bring your artistic dreams to life. Through structured training and professional guidance, we help students master the subtle nuances of both classical and contemporary art forms, shaping passionate learners into confident performers.",
      "Our classes cater to all generations and skill levels, from young children discovering their first beat to adults reconnecting with their love for music and dance. Led by passionate instructors, our curriculum focuses on building strong foundations, technical precision, and a genuine emotional connection with the art.",
      "We don't just teach techniques we nurture a lifelong love for rhythm and melody. Join the Ninaad family today to experience the joy of performance, lasting friendships, and step onto a stage where your talents truly shine. Your artistic journey begins here.",
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
];
