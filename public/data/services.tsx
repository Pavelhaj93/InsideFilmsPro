import { FaCogs, FaFilm, FaRegLightbulb } from "react-icons/fa";
import { IoBrushOutline, IoCameraOutline } from "react-icons/io5";
import { PiMagicWand } from "react-icons/pi";

export const grey = "rgb(74, 72, 70)";

export const services = [
  {
    id: 1,
    title: "Kreativní kampaně",
    description:
      "Využijte naše inovativní kampaně k maximalizaci potenciálu vaší značky a zaujetí vašeho publika.",
    icon: <FaRegLightbulb color={grey} />,
  },
  {
    id: 2,
    title: "Produkční služby",
    description:
      "Přetvořte svou vizi ve skutečnost díky našim kompletním produkčním službám od konceptu po realizaci.",
    icon: <FaCogs color={grey} />,
  },
  {
    id: 3,
    title: "Audiovizuální produkce",
    description:
      "Upoutejte své publikum prvotřídními audiovizuálními produkcemi, od scénáře až po finální úpravy.",
    icon: <FaFilm color={grey} />,
  },
  {
    id: 4,
    title: "Fotografické služby",
    description:
      "Posilte vizuální stránku vaší značky prostřednictvím profesionální fotografie zachycující jedinečné okamžiky.",
    icon: <IoCameraOutline color={grey} />,
  },
  {
    id: 5,
    title: "Animovaná videa, 3D grafika a VFX",
    description:
      "Přiveďte své nápady k životu s našimi animovanými videi, 3D grafikou a špičkovými vizuálními efekty.",
    icon: <PiMagicWand color={grey} />,
  },
  {
    id: 6,
    title: "Grafické služby",
    description:
      "Vylepšete vizuální identitu vaší značky pomocí našich profesionálních grafických služeb.",
    icon: <IoBrushOutline color={grey} />,
  },
];
