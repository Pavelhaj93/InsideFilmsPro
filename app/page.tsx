import Image from "next/image";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
    </main>
  );
}
