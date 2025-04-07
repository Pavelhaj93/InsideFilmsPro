import { FaCogs, FaFilm, FaRegLightbulb } from "react-icons/fa";
import {
  IoBrushOutline,
  IoCameraOutline,
  IoGlobeOutline,
} from "react-icons/io5";
import { PiMagicWand } from "react-icons/pi";
import { MdOutlineWeb, MdAnimation } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";

export const grey = "rgb(74, 72, 70)";

export const services = [
  {
    id: 1,
    title: "Marketing",
    description:
      "Vytváříme efektivní marketingové strategie, které posílí vaši značku a osloví správné publikum.",
    icon: <RiAdvertisementLine color={grey} />,
  },
  {
    id: 2,
    title: "Kreativní kampaně",
    description:
      "Využijte naše inovativní kampaně k maximalizaci potenciálu vaší značky a zaujetí vašeho publika.",
    icon: <FaRegLightbulb color={grey} />,
  },
  {
    id: 3,
    title: "Produkční služby",
    description:
      "Přetvořte svou vizi ve skutečnost díky našim kompletním produkčním službám od konceptu po realizaci.",
    icon: <FaCogs color={grey} />,
  },
  {
    id: 4,
    title: "Audiovizuální tvorba",
    description:
      "Upoutejte své publikum prvotřídními audiovizuálními produkcemi, od scénáře až po finální úpravy.",
    icon: <FaFilm color={grey} />,
  },
  {
    id: 5,
    title: "Online obsah",
    description:
      "Tvoříme atraktivní a poutavý online obsah, který posílí vaši značku na digitálních platformách.",
    icon: <MdOutlineWeb color={grey} />,
  },
  {
    id: 6,
    title: "Grafická tvorba",
    description:
      "Vylepšete vizuální identitu vaší značky pomocí našich profesionálních grafických služeb.",
    icon: <IoBrushOutline color={grey} />,
  },
  {
    id: 7,
    title: "Fotografická tvorba",
    description:
      "Posilte vizuální stránku vaší značky prostřednictvím profesionální fotografie zachycující jedinečné okamžiky.",
    icon: <IoCameraOutline color={grey} />,
  },
  {
    id: 8,
    title: "Animovaná videa",
    description:
      "Oživte svůj obsah kreativními animacemi, které přitáhnou pozornost vašeho publika.",
    icon: <MdAnimation color={grey} />,
  },
  {
    id: 9,
    title: "3D Grafika a VFX",
    description:
      "Přiveďte své nápady k životu s našimi 3D grafikami a špičkovými vizuálními efekty.",
    icon: <PiMagicWand color={grey} />,
  },
];
