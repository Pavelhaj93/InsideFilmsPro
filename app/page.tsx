import HeroSection from "./_components/HeroSection";
// import VideoSection from "./_components/VideoSection";
import ContactSection from "./_components/ContactSection";
import ReferencesSection from "./_components/ReferencesSection";
import type { Metadata } from "next";
import AboutUsSection from "./_components/AboutUsSection";
import OurServicesSection from "./_components/OurServicesSection";
// import AnotherServicesSetion from "./_components/AnotherServicesSetion";

export const metadata: Metadata = {
  title: "Kreativní a filmová produkce | R&T Production s.r.o. | INSIDEPRO",
  description:
    "Kreativní a filmová produkce | R&T Production s.r.o. | INSIDEPRO",
  icons: {
    icon: "/pictogram/INSIDEPRO15.png",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutUsSection />
      {/* <VideoSection /> */}
      <OurServicesSection />
      {/* <AnotherServicesSetion /> */}
      <ReferencesSection />
      <ContactSection />
    </main>
  );
}
