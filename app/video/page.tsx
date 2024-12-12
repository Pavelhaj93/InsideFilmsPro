import HeadingSection from "@/components/HeadingSection/HeadingSection";

export default function Video() {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <HeadingSection
        heading=""
        description=""
        imageSrc="/images/background/video.jpg"
        imageAlt="Video production background"
        videoSrc="https://www.youtube.com/embed/zJv4mfBXT0U"
      />
      {/* New YouTube Video Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl text-white text-center mb-8">
            Naše video reference
          </h2>
          <h3 className="text-3xl mt-20 lg:text-4xl text-white text-center mb-8">
            Právě připravujeme...
          </h3>

          {/* YouTube Video Embeds */}
          <div className="space-y-8 h-[500px]"></div>
        </div>
      </section>
    </div>
  );
}
