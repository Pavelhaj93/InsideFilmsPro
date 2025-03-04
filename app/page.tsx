import HeroSection from "./_components/HeroSection";
import AboutUsSection from "./_components/AboutUsSection";
import VideoSection from "./_components/VideoSection";
import OurServicesSection from "./_components/OurServicesSection";
import ContactSection from "./_components/ContactSection";
import ReferencesSection from "./_components/ReferencesSection";

export const metadata = {
  title:
    "Natáčení videí | Reklamní produkce | Inside Films | R&T Production s.r.o.",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutUsSection />
      {/* <VideoSection /> */}
      <OurServicesSection />
      <ReferencesSection />
      <ContactSection />
    </main>
  );
}
