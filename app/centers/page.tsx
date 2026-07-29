import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CenterCard from "@/components/centers/CenterCard";
import Centers from "@/components/home/Centers";
import AffiliatedCenters from "@/components/home/AffiliatedCenters";
import Offerings from "@/components/home/Offerings";
import Partner from "@/components/centers/Partner";
import CTA from "@/components/courses/CTA";

import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/Hero.css";
import "@/styles/centers.css";
import "@/styles/offerings.css";
import "@/styles/Partner.css";
import "@/styles/CTA.css";

export default function CentersPage() {
  return (
    <>
      <Navbar />

      <main className="centers-page">
        <CenterCard />

        <Centers />

        <AffiliatedCenters />

        <Offerings />

        <Partner />

        <CTA />
      </main>

      <Footer />
    </>
  );
}