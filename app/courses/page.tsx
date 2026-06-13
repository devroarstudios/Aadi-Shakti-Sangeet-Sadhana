import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CourseHero from "@/components/courses/CourseHero";
import '@/styles/offerings.css';
import Offerings from '@/components/home/Offerings';
import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/Hero.css";
import LearningModule from "@/components/courses/Learningmodule";
import "@/styles/Learningmodule.css";
import '@/styles/centers.css';
import Centers from '@/components/home/Centers';
import CTA from "@/components/courses/CTA";
import "@/styles/CTA.css";

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      <main>
        <CourseHero />
        <Offerings />
        <LearningModule />
        <Centers />
        <CTA />
      </main>

      <Footer />
    </>
  );
}