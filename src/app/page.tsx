import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Showcase } from "@/components/Showcase";
import { HowItWorks } from "@/components/HowItWorks";
import { NoTech } from "@/components/NoTech";
import { Pricing } from "@/components/Pricing";
import { WhyPagesale } from "@/components/WhyPagesale";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <Benefits />
        <Showcase />
        <HowItWorks />
        <NoTech />
        <Pricing />
        <WhyPagesale />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
