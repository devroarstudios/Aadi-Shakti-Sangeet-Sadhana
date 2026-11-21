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
  image:
    "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785438231/vocal_fft2ah.jpg",

  description:
    "Designed for learners of all ages, our vocal training nurtures singing skills, rhythm, and musical expression through expert guidance.",

  tags: ["Classical", "Semi-Classical Age 4+"],

  about:
    "At Aadi Shakti Sangeet Sadhana, we offer training in Hindustani Classical Music and Light Music for students of all ages. Our curriculum covers a variety of musical genres, including Sufi, Ghazal, Bhajan, Thumri, and Bollywood music. Our well-structured curriculum, combined with dedicated guidance and a disciplined approach to learning, helps students develop their musical skills, build confidence, and progress towards musical excellence.",

  levels: "Prarambhik to Bhaskar",

  duration: "1 Hour • Twice a Week",

  curriculum: [
    "Hindustani Classical Music (Ragas)",
    "Semi-Classical Music (Bhajan, Ghazal, Thumri & Sufi)",
    "Bollywood Songs",
    "Singing Techniques",
    "Voice Training"
  ],

  examination: {
    title: "Examination System",
    items: [
      "Aadi Shakti Sangeet Sadhana (Internal Examination)",
      "Pracheen Kala Kendra, Prayag Sangeet Samiti, Prayagraj (University Examination)"
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
  image:
    "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785438228/DSC02371_zf45jv.jpg",

  description:
    "Our Kathak training focuses on traditional techniques, helping students develop grace, precision, rhythm, and artistic confidence through structured learning.",

  tags: ["Classical", "Semi-Classical", "Age 4+"],

  about:
    "At Aadi Shakti Sangeet Sadhana, we offer authentic Kathak training rooted in the rich traditions and distinctive nuances of the Lucknow Gharana. Under the guidance of our experienced and dedicated faculty, students develop grace, precision, rhythm, and a deeper understanding of this classical dance form. Our structured curriculum ensures systematic learning and supports each student's artistic growth and overall development. Alongside traditional Kathak, students also explore Bollywood Kathak, allowing them to develop versatility while maintaining a strong foundation in classical dance.",

  levels: "Prarambhik to Bhaskar",

  duration: "1 Hour • Twice a Week",

  curriculum: [
    "Classical Kathak",
    "Bollywood Kathak"
  ],

  examination: {
    title: "Examination System",
    items: [
      "Aadi Shakti Sangeet Sadhana (Internal Examination)",
      "Pracheen Kala Kendra, Prayag Sangeet Samiti, Prayagraj (University Examination)"
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
  image:
    "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785438232/instrument_ksk4xm.jpg",

  description:
    "Our instrumental training nurtures musical skills, creativity, and confidence through structured learning and expert guidance.",

  tags: ["Classical", "Light Music", "Age 5+"],

  about:
    "At Aadi Shakti Sangeet Sadhana, we believe that musical instruments are an integral part of musical expression. We offer training in a variety of instruments, including guitar, keyboard, harmonium, tabla, dholak, and sitar, under the guidance of experienced and dedicated faculty. Our structured curriculum focuses on developing technical proficiency, musical understanding, creativity, and performance skills. Students are encouraged to explore their musical potential, build confidence, and develop an appreciation for the art of music.",

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
      "Aadi Shakti Sangeet Sadhana (Internal Examination)",
      "Pracheen Kala Kendra, Prayag Sangeet Samiti, Prayagraj (University Examination)"
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