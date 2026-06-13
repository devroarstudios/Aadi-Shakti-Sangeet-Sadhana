import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CenterCard from "@/components/centers/CenterCard";

import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/Hero.css";
import '@/styles/centers.css';
import Centers from '@/components/home/Centers';
import '@/styles/offerings.css';
import Offerings from '@/components/home/Offerings';
import CTA from "@/components/courses/CTA";
import "@/styles/CTA.css";
import Partner from "@/components/centers/Partner";
import "@/styles/Partner.css";

export default function CentersPage() {
  return (
    <>
      <Navbar />

      <main>
        <CenterCard />
        <Centers/>
        <Offerings/>
        <Partner />

        <CTA />

      </main>

      <Footer />
    </>
  );
}