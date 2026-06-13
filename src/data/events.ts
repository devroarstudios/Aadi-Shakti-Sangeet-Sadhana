export interface YoutubeVideo {
  id: string;
  title: string;
  channel: string;
  embedId: string;
}

export const videos: YoutubeVideo[] = [
  {
    id: "1",
    title: "Annual Day Performance 2024",
    channel: "Aadi Shakti Sangeet Sadhana",
    embedId: "VIDEO_ID_1",
  },
  {
    id: "2",
    title: "Classical Dance Recital — Kharghar Center",
    channel: "Aadi Shakti Sangeet Sadhana",
    embedId: "VIDEO_ID_2",
  },
  {
    id: "3",
    title: "Kids Vocal Showcase 2024",
    channel: "Aadi Shakti Sangeet Sadhana",
    embedId: "VIDEO_ID_3",
  },
];