import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/contacthero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/contactmap";

import "@/styles/ContactInfo.css"
import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/Hero.css";
import '@/styles/contactmap.css';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <ContactHero />
        <ContactInfo />
        <ContactMap />
      </main>

      <Footer />
    </>
  );
}