import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryMoment from "@/components/gallery/Gallerymoment";
import GalleryHero from "@/components/gallery/Galleryhero";

import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/Hero.css";
import "@/styles/Gallerymoment.css";
import UpdatedCTA from "@/components/events/UpdatedCTA";
import "@/styles/UpdatedCTA.css";


export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main>
        <GalleryHero />
        <GalleryMoment />
        <UpdatedCTA />
      </main>

      <Footer />
    </>
  );
}