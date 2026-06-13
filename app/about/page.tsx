import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import FounderStory from '@/components/about/FounderStory';
import VisionMission from "@/components/about/Visionmission";
import Journey from "@/components/about/journey";
import Values from "@/components/about/values";
import Team from '@/components/home/Team';
import Enquire from "@/components/about/enquire";

import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/story-section.css";
import "@/styles/about.css";
import "@/styles/founderstory.css"
import "@/styles/Visionmission.css";
import "@/styles/journey.css";
import "@/styles/values.css";
import '@/styles/Team.css';
import '@/styles/enquire.css';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />
        <FounderStory />
        <VisionMission />
        <Journey />
        <Values />
        <Team />
        <Enquire />
      </main>
      <Footer />
    </>
  );
}