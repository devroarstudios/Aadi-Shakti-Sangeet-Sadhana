import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import '@/styles/ticker.css';
import '@/styles/navbar.css';
import '@/styles/hero-slider.css';
import Story from "@/components/home/Story";
import '@/styles/story-section.css';
import '@/styles/offerings.css';
import Offerings from '@/components/home/Offerings';
import '@/styles/event-highlights.css';
import EventHighlights from '@/components/home/EventHighlights';
import '@/styles/testimonials.css';
import Testimonials from '@/components/home/Testimonials';
import '@/styles/centers.css';
import Centers from '@/components/home/Centers';
import '@/styles/gallery-preview.css';
import GalleryPreview from '@/components/home/GalleryPreview';
import Team from '@/components/home/Team';
import '@/styles/Team.css';
import '@/styles/footer.css';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
      <Hero/>
      <Story/>
      <Offerings/>
      <EventHighlights/>
      <Team/>
      <Testimonials/>
      <Centers/>
      <GalleryPreview/>
     </main>
      <Footer />
    </>
  );
}