import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PressStrip from "@/components/PressStrip";
import Mission from "@/components/Mission";
import HowItWorks from "@/components/HowItWorks";
import CoinLedger from "@/components/CoinLedger";
import Creators from "@/components/Creators";
import Reviews from "@/components/Reviews";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
//import BlogTeasers from "@/components/BlogTeasers";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className='bg-bg min-h-screen'>
      <Nav />
      <Hero />
      {/* <PressStrip /> */}
      <Mission />
      <HowItWorks />
      <CoinLedger />
      {/* <Creators /> */}
      <Reviews />
      <Features />
      <Benefits />
      {/* <BlogTeasers / > */}
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
