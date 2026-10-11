import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function Home() {
  return (
    <main className="flex flex-col">
      <FloatingElements />
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
