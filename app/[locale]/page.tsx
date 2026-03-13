import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { AboutUs } from "@/components/sections/AboutUs";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactUs } from "@/components/sections/ContactUs";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-black">
        <Hero />
        <StatsBar />
        <ProductCategories />
        <BrandsSection />
        <AboutUs />
        <WhyChooseUs />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </>
  );
}
