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
        <div className="content-auto">
          <Benefits />
        </div>
        <div className="content-auto">
          <Showcase />
        </div>
        <div className="content-auto">
          <HowItWorks />
        </div>
        <div className="content-auto">
          <NoTech />
        </div>
        <div className="content-auto">
          <Pricing />
        </div>
        <div className="content-auto">
          <WhyPagesale />
        </div>
        <div className="content-auto">
          <FAQ />
        </div>
        <div className="content-auto">
          <Contact />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
