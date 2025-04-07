import HeadingSection from "@/components/HeadingSection/HeadingSection";
import type { Metadata } from "next";
import ContactPageSection from "../_components/ContactPage/ContactPageSection";

export const metadata: Metadata = {
  title: "Kontakt | R&T Production s.r.o. | INSIDEPRO",
  description: "Kontakt | R&T Production s.r.o. | INSIDEPRO",
};

export default function Kontakt() {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <HeadingSection
        heading="KONTAKT"
        description="Jsme tu pro vás, abychom společně vytvořili
vizuální prezentaci, která bude odpovídat
vašim hodnotám a brand image"
        imageSrc="/images/background/kontakt.jpg"
        imageAlt="Guy riding a motorbike on rear wheel"
      />
      <ContactPageSection />
    </div>
  );
}
