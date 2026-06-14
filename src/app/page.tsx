import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Collection from "@/components/Collection";
import Storytelling from "@/components/Storytelling";
import TechnicalDetails from "@/components/TechnicalDetails";
import PrivateExperience from "@/components/PrivateExperience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white text-black-absolute selection:bg-champagne-gold selection:text-white">
      <Banner />
      <Header />
      <Hero />
      <Collection />
      <Storytelling />
      <TechnicalDetails />
      <Authority />
      <PrivateExperience />
      <Footer />
    </main>
  );
}
