import React from "react";

const AboutUsSection = () => {
  return (
    <section
      id="aboutUsSection"
      className="w-full py-12 md:py-16 lg:py-32 px-4 bg-white text-black"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b border-black pb-2">
              Vaše vize,{" "}
              <span className="text-yellow-400">naše kreativita</span>
              <br />
              Prezentujte se a prodávejte se s naší pomocí
            </h2>
            <div className="space-y-4 text-lg font-light">
              <p className="text-lg">
                Jsme progresivní kreativní a marketingová produkce s více než
                sedmnáctiletou profesní zkušeností.
              </p>
              <p className="text-lg">
                Pomáháme značkám tvořit vizuální obsah, který má sílu oslovit,
                zaujmout a prodávat.
              </p>
              Společně budujeme silnou brand identitu, hledáme ideální způsoby
              komunikace a ladíme sebeprezentaci v online i offline světě.
              <p className="text-lg">
                V naši spolupráci nastavujeme dlouhodobé marketingové strategie,
                které zvyšují vaši viditelnost, podporují prodeje a budují
                důvěru k vaší značce.
              </p>
              <p className="text-lg">
                Díky komplexnímu přístupu vnímáme vaše potřeby a přinášíme
                řešení, která dávají smysl a fungují.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="flex flex-col bg-yellow-400 p-4">
              <p className="p-1 text-7xl">DESIGN</p>
              <p className="p-1 text-7xl">BRANDING A STRATEGIE</p>
              <p className="p-1 text-7xl">KOMUNIKACE</p>
              <p className="p-1 text-7xl">OBASH</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
