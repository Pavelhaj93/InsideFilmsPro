import HeroSection from "./_components/HeroSection";
import AboutUsSection from "./_components/AboutUsSection";
import OurServicesSection from "./_components/OurServicesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
    </main>
  );
}
