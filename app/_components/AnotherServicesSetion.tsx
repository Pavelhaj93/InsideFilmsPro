import React from "react";

const anotherServices = [
  {
    title: "VAŠE HODNOTY",
    subtitle:
      "Chceme, aby proces tvorby byl pro vás co nejjednodušší. Od prvního setkání až po hotovou realizaci vás provedeme celým procesem – transparentně a profesionálně.",
  },
  {
    title: "PŘÍMÁ SPOLUPRÁCE",
    subtitle:
      "Vidíme se spolu na schůzkách, při vývoji kreativních konceptů i na place za kamerou.",
  },
  {
    title: "VZTAHY",
    subtitle:
      "Budování dlouhodobých vztahů s klientem je pro nás velmi důležité. Rádi pracujeme v přátelském aodlehčeném módu, ale se vší profesionalitou.",
  },
  {
    title: "ZNÁME TRENDY",
    subtitle:
      "Chápeme publikum a víme, jak oslovit koncového diváka přizpůsobením cílové reklamy. Známe typy médií a víme, jaké formáty se hodí na různé druhy kanálů.",
  },
  {
    title: "FLEXIBILITA",
    subtitle:
      "Máme na vás čas. Kromě plánování dlouhodobých kampaní dokážeme velmi efektivně reagovat i na vaše aktuální potřeby.",
  },
  {
    title: "ŘEMESLO",
    subtitle:
      "Jsme tým profesionálů, kteří svou práci milují a berou ji jako poslání. Každému projektu dáváme maximum péče – ať už jde o technologické, nebo personální zajištění.",
  },
];

const AnotherServicesSetion = () => {
  // Create 6 sections with just titles and subtitles
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto px-4 h-auto max-w-7xl">
        <div className="text-center mb-12 w-[300px]">
          <h2 className="text-6xl tracking-normal text-left mb-14 mt-8 font-bebas bg-yellow-300 p-4">
            WHAT WE DO
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12 3xl:gap-24">
          {anotherServices.map((service, index) => (
            <div
              key={index}
              className="relative p-6 200 h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-3xl font-semibold mb-2 text-left font-bebas">
                  {service.title}
                </h3>
                <h4 className="text-xl font-medium mb-4 text-left italic text-gray-600">
                  {service.subtitle}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnotherServicesSetion;
