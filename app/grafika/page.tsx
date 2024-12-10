import HeadingSection from "@/components/HeadingSection/HeadingSection";

export default function Grafika() {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <HeadingSection
        heading="GRAFIKA"
        description=""
        imageSrc="/images/background/grafika.jpg"
        imageAlt="photographer taking picture in the bathroom with wall full of graffiti"
      />
      <section className="bg-black text-white pt-16 pb-8 md:pb-16 px-4 flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl text-white text-center mb-12">
            Naše Grafické práce
          </h2>
          <h3 className="text-3xl mt-20 lg:text-4xl text-white text-center mb-8">
            Právě připravujeme...
          </h3>
          <div className="space-y-8 h-[500px]"></div>
        </div>
      </section>
    </div>
  );
}
