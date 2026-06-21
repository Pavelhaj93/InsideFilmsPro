import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    image: "/images/about-image.png",
    title: "BRAND & MARKETING STRATEGIE",
    subtitle: "Budování silných značek a efektivního marketingu",
    description:
      "Pomáháme vaší značce najít jasný směr a vyniknout. Vytváříme marketingové strategie, které dávají smysl, cílí na správné lidi a přinášejí výsledky, aby vaše značka rostla a byla zapamatovatelná.",
  },
  {
    id: 2,
    image: "/social-media-content-creation-studio-setup.jpg",
    title: "SOCIÁLNÍ SÍTĚ & KAMPANĚ",
    subtitle: "Vaše sociální sítě mohou být víc než jen vizitka",
    description:
      "Spravujeme webové stránky a sociální sítě, připravujeme PPC kampaně (Google Ads, Sklik, Meta Ads) a vytváříme online obsah a marketingové strategie, které zajistí, že vaše značka bude vidět tam, kde to opravdu dává smysl.",
  },
  {
    id: 3,
    image: "/video-production-and-creative-content-studio.jpg",
    title: "AUDIOVIZUÁLNÍ PRODUKCE",
    subtitle: "Tvorba kreativního obsahu",
    description:
      "Vytváříme reklamy, prezentační videa, animace, fotografie, 3D grafiku a vizuální efekty. Zajišťujeme také grafickou identitu, loga a webové stránky. Postaráme se o celý proces – od konceptu až po finální výsledek.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto px-4 h-auto max-w-7xl">
        <div className="text-center mb-12 w-[200px]">
          <h2 className="text-6xl tracking-normal text-left mb-14 mt-8 font-bebas bg-yellow-300 p-4">
            HOW CAN WE HELP YOU
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12 3xl:gap-24">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-3xl font-semibold mb-2 text-left font-bebas">
                {service.title}
              </h3>
              <h4 className="text-xl font-medium mb-4 text-left italic text-gray-600">
                {service.subtitle}
              </h4>
              <p className="text-lg text-left font-extralight font-oswald leading-7 tracking-widest mb-6">
                {service.description}
              </p>
              {/* <Button text="Více o službě" link="/services" /> */}
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 h-auto max-w-7xl mt-12">
          <div className="text-center">
            <Button size="lg" variant="default">
              PDF Prezentace ke stažení
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
