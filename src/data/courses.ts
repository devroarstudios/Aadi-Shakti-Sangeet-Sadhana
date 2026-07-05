export interface Course {
  slug: string;
  title: string;
  hindi: string;
  image: string;
  description: string;
  tags: string[];

  about: string;
  levels: string;
  duration: string;

  curriculum: string[];

  examination: {
    title: string;
    items: string[];
  };

  syllabus: {
    level: string;
    internalSyllabus: string;
    internalDuration: string;
    externalSyllabus: string;
    externalDuration: string;
    totalDuration: string;
  }[];
}

export const courses: Course[] = [
  {
  slug: "vocal-training",
  title: "Vocal Training",
  hindi: "स्वर प्रशिक्षण",
  image: "https://res.cloudinary.com/dcaiszxcb/image/upload/v1783271795/vocals_z1seyg.jpg",

  description:
    "Designed for learners of all ages, developing vocal skills, rhythm, and musical expression with expert guidance.",

  tags: ["Classical", "Semi-Classical", "Age 4+"],

  about:
    "At Aadi Shakti, we offer training in Hindustani Classical and Light Music for students of all age groups. Our curriculum includes various genres such as Sufi, Ghazal, Bhajan, Thumri, Bollywood and more. The highlight of our training lies in our well-structured curriculum, combined with dedicated guidance, and a disciplined approach that helps every student grow with confidence and musical excellence.",

  levels: "Prarambhik to Bhaskar",

  duration: "1 Hour • Twice a Week",

  curriculum: [
    "Hindustani Classical Raags",
    "Semi-Classical (Bhajan, Ghazal, Thumri & Sufi)",
    "Bollywood Songs",
    "Singing Techniques",
    "Voice Training"
  ],

  examination: {
    title: "Examination System",
    items: [
      "Aadi Shakti Sangeet Kala Kendra (Internal Examination)",
      "Pracheen Kala Kendra (University Examination)"
    ]
  },

  syllabus: [
    {
      level: "PP1 (Prarambhik Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "6 Months",
      externalSyllabus: "Full Syllabus",
      externalDuration: "6 Months",
      totalDuration: "1 Year"
    },
    {
      level: "PP2 (Prarambhik Part 2)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "6 Months",
      externalSyllabus: "Full Syllabus",
      externalDuration: "6 Months",
      totalDuration: "1 Year"
    },
    {
      level: "1st Year (Bhushan Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "6 Months",
      externalSyllabus: "Full Syllabus",
      externalDuration: "6 Months",
      totalDuration: "1 Year"
    },
    {
      level: "2nd Year (Bhushan Part 2)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "6 Months",
      externalSyllabus: "Full Syllabus",
      externalDuration: "6 Months",
      totalDuration: "1 Year"
    },
    {
      level: "3rd Year Part 1 (Bhushan Final Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "3rd Year Part 2 (Bhushan Final Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    },
    {
      level: "4th Year Part 1 (Visharad Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "4th Year Part 2 (Visharad Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    },
    {
      level: "5th Year Part 1 (Visharad Final Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "5th Year Part 2 (Visharad Final Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    },
    {
      level: "6th Year Part 1 (Bhaskar Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "6th Year Part 2 (Bhaskar Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    },
    {
      level: "7th Year Part 1 (Bhaskar Final Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "7th Year Part 2 (Bhaskar Final Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    }
  ]
},

  {
  slug: "kathak-training",
  title: "Kathak Training",
  hindi: "कथक प्रशिक्षण",
  image: "https://res.cloudinary.com/dcaiszxcb/image/upload/v1783271795/kathak_o9vpaz.jpg",

  description:
    "Traditional Kathak training that builds grace, precision, and artistic confidence through structured learning.",

  tags: ["Classical", "Semi-Classical", "All Levels"],

  about:
    "At Aadi Shakti, we impart training in Kathak in its purest and most authentic form, with a strong emphasis on the rich tradition and subtle nuances of the Lucknow Gharana. Under the guidance of our experienced and dedicated faculty, students are taught every aspect of the art form with grace, precision, and deep artistic understanding. Our well-defined and structured curriculum ensures systematic learning and plays a vital role in the artistic growth and overall development of every student. Along with Kathak, students are also introduced to various semi-classical dance forms, helping them develop versatility while staying rooted in classical tradition.",

  levels: "Prarambhik to Bhaskar",

  duration: "1 Hour • Twice a Week",

  curriculum: [
    "Pure Kathak",
    "Bollywood Kathak"
  ],

  examination: {
    title: "Examination System",
    items: [
      "Aadi Shakti Sangeet Kala Kendra (Internal Examination)",
      "Pracheen Kala Kendra (University Examination)"
    ]
  },

  syllabus: [
    {
      level: "PP1 (Prarambhik Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "6 Months",
      externalSyllabus: "Full Syllabus",
      externalDuration: "6 Months",
      totalDuration: "1 Year"
    },
    {
      level: "PP2 (Prarambhik Part 2)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "6 Months",
      externalSyllabus: "Full Syllabus",
      externalDuration: "6 Months",
      totalDuration: "1 Year"
    },
    {
      level: "1st Year (Bhushan Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "6 Months",
      externalSyllabus: "Full Syllabus",
      externalDuration: "6 Months",
      totalDuration: "1 Year"
    },
    {
      level: "2nd Year (Bhushan Part 2)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "6 Months",
      externalSyllabus: "Full Syllabus",
      externalDuration: "6 Months",
      totalDuration: "1 Year"
    },
    {
      level: "3rd Year Part 1 (Bhushan Final Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "3rd Year Part 2 (Bhushan Final Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    },
    {
      level: "4th Year Part 1 (Visharad Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "4th Year Part 2 (Visharad Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    },
    {
      level: "5th Year Part 1 (Visharad Final Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "5th Year Part 2 (Visharad Final Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    },
    {
      level: "6th Year Part 1 (Bhaskar Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "6th Year Part 2 (Bhaskar Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    },
    {
      level: "7th Year Part 1 (Bhaskar Final Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "7th Year Part 2 (Bhaskar Final Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    }
  ]
},

  {
  slug: "instrumental-training",
  title: "Instrumental Training",
  hindi: "वाद्य संगीत प्रशिक्षण",
  image: "https://res.cloudinary.com/dcaiszxcb/image/upload/v1783271795/music_ym5rdh.jpg",

  description:
    "Structured instrumental training that develops creativity, and confident musicianship through expert guidance.",

  tags: ["Classical", "Semi-Classical", "Age 5+"],

  about:
    "At Aadi Shakti, we believe that instruments are the soul of music. We offer training in a variety of instruments, including Guitar, Keyboard, Harmonium, Tabla, Dholak, and Sitar under the guidance of skilled and experienced faculty. With a well-structured and thoughtfully designed curriculum, our training focuses not only on developing technical proficiency but also on nurturing creativity, musical understanding, and performance skills. Students are guided in a way that helps them grow into confident musicians while exploring the art of music production and composition.",

  levels: "Prarambhik to Bhaskar",

  duration: "1 Hour • Twice a Week",

  curriculum: [
    "Tabla",
    "Dholak",
    "Guitar",
    "Keyboard",
    "Sitar",
    "Harmonium"
  ],

  examination: {
    title: "Examination System",
    items: [
      "Aadi Shakti Sangeet Kala Kendra (Internal Examination)",
      "Pracheen Kala Kendra (University Examination)"
    ]
  },

  syllabus: [
    {
      level: "PP1 (Prarambhik Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "6 Months",
      externalSyllabus: "Full Syllabus",
      externalDuration: "6 Months",
      totalDuration: "1 Year"
    },
    {
      level: "PP2 (Prarambhik Part 2)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "6 Months",
      externalSyllabus: "Full Syllabus",
      externalDuration: "6 Months",
      totalDuration: "1 Year"
    },
    {
      level: "1st Year (Bhushan Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "6 Months",
      externalSyllabus: "Full Syllabus",
      externalDuration: "6 Months",
      totalDuration: "1 Year"
    },
    {
      level: "2nd Year (Bhushan Part 2)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "6 Months",
      externalSyllabus: "Full Syllabus",
      externalDuration: "6 Months",
      totalDuration: "1 Year"
    },
    {
      level: "3rd Year Part 1 (Bhushan Final Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "3rd Year Part 2 (Bhushan Final Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    },
    {
      level: "4th Year Part 1 (Visharad Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "4th Year Part 2 (Visharad Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    },
    {
      level: "5th Year Part 1 (Visharad Final Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "5th Year Part 2 (Visharad Final Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    },
    {
      level: "6th Year Part 1 (Bhaskar Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "6th Year Part 2 (Bhaskar Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    },
    {
      level: "7th Year Part 1 (Bhaskar Final Part 1)",
      internalSyllabus: "First Half of Syllabus",
      internalDuration: "1 Year",
      externalSyllabus: "Continue",
      externalDuration: "-",
      totalDuration: "1 Year"
    },
    {
      level: "7th Year Part 2 (Bhaskar Final Part 2)",
      internalSyllabus: "Second Half of Syllabus",
      internalDuration: "-",
      externalSyllabus: "Full Syllabus",
      externalDuration: "1 Year",
      totalDuration: "1 Year"
    }
  ]
},
];