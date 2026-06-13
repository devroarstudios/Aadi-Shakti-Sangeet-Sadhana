import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import EventHero from "@/components/events/Eventhero";

import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/Hero.css";
import '@/styles/event-highlights.css';
import EventHighlights from '@/components/home/EventHighlights';
import UpcomingEvents from "@/components/events/UpcomingEvents";
import "@/styles/UpcomingEvents.css";
import PastHighlights from "@/components/events/PastHighlights";
import "@/styles/PastHighlights.css";
import UpdatedCTA from "@/components/events/UpdatedCTA";
import "@/styles/UpdatedCTA.css";


export default function EventsPage() {
  return (
    <>
      <Navbar />

      <main>
        <EventHero />
        <EventHighlights />
        <UpcomingEvents />
        <PastHighlights />
        <UpdatedCTA />
      </main>

      <Footer />
    </>
  );
}