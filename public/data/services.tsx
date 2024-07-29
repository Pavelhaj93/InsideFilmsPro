import { FaCogs, FaFilm, FaRegLightbulb } from "react-icons/fa";
import { IoBrushOutline, IoCameraOutline } from "react-icons/io5";
import { PiMagicWand } from "react-icons/pi";

export const grey = "rgb(74, 72, 70)";

export const services = [
  {
    title: "Kreativní kampaně",
    description:
      "Využijte naše inovativní kampaně k maximalizaci potenciálu vaší značky a zaujetí vašeho publika.",
    icon: <FaRegLightbulb color={grey} />,
  },
  {
    title: "Produkční služby",
    description:
      "Přetvořte svou vizi ve skutečnost díky našim kompletním produkčním službám od konceptu po realizaci.",
    icon: <FaCogs color={grey} />,
  },
  {
    title: "Audiovizuální produkce",
    description:
      "Upoutejte své publikum prvotřídními audiovizuálními produkcemi, od scénáře až po finální úpravy.",
    icon: <FaFilm color={grey} />,
  },
  {
    title: "Fotografické služby",
    description:
      "Posilte vizuální stránku vaší značky prostřednictvím profesionální fotografie zachycující jedinečné okamžiky.",
    icon: <IoCameraOutline color={grey} />,
  },
  {
    title: "Animovaná videa, 3D grafika a VFX",
    description:
      "Přiveďte své nápady k životu s našimi animovanými videi, 3D grafikou a špičkovými vizuálními efekty.",
    icon: <PiMagicWand color={grey} />,
  },
  {
    title: "Grafické služby",
    description:
      "Vylepšete vizuální identitu vaší značky pomocí našich profesionálních grafických služeb.",
    icon: <IoBrushOutline color={grey} />,
  },
];
