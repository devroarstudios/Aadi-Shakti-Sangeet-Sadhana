import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CurriculumHero from "@/components/curriculum/Curriculumhero";

import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/Hero.css";
import Syllabus from "@/components/curriculum/Syllabus";
import "@/styles/Syllabus.css";
import Examination from "@/components/curriculum/Examination";
import "@/styles/Examination.css";
import Certifications from "@/components/curriculum/Certifications";
import "@/styles/Certifications.css";
import CTA from "@/components/courses/CTA";
import "@/styles/CTA.css";

export default function CurriculumPage() {
  return (
    <>
      <Navbar />

      <main>
        <CurriculumHero />
        <Syllabus />
        <Examination />
        <Certifications />
        <CTA />

      </main>

      <Footer />
    </>
  );
}