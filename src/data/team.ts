export interface TeamMember {
  image: string;
  name: string;
  role: string;
  roleHindi: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/q_auto/f_auto/v1780925335/ChatGPT_Image_Jun_8_2026_06_59_31_PM_d0s6gm.png",
    name: "Sheetal Pawar",
    role: "Founder & Director",
    roleHindi: "संस्थापक",
    bio: "A dedicated practitioner of Indian classical arts with years of training and performance experience across Maharashtra.",
  },
  {
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/q_auto/f_auto/v1780925398/ChatGPT_Image_Jun_8_2026_07_01_06_PM_aum6vq.png",
    name: "Jogeshwari Pawar",
    role: "Senior Vocal Guru",
    roleHindi: "वरिष्ठ संगीत गुरु",
    bio: "Classically trained vocalist specialising in Hindustani classical and semi-classical vocal traditions.",
  },
  {
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/q_auto/f_auto/v1780925462/ChatGPT_Image_Jun_8_2026_07_02_12_PM_bkvr4o.png",
    name: "Mayuri Pawar",
    role: "Dance Instructor",
    roleHindi: "नृत्य प्रशिक्षक",
    bio: "Expert in classical and semi-classical dance forms, bringing elegance and discipline to every class.",
  },
  {
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/q_auto/f_auto/v1780925526/ChatGPT_Image_Jun_8_2026_07_03_19_PM_w34ejv.png",
    name: "Rohit Pawar",
    role: "Junior Instructor",
    roleHindi: "कनिष्ठ प्रशिक्षक",
    bio: "Passionate young artist specialising in children's batches — making music and dance fun and accessible.",
  },
];