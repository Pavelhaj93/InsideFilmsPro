import HeroSection from "./_components/HeroSection";
import AboutUsSection from "./_components/AboutUsSection";
import OurServicesSection from "./_components/OurServicesSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
      <ContactSection />
    </main>
  );
}
