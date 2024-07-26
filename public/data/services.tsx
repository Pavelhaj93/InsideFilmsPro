import { FaCogs, FaFilm, FaRegLightbulb } from "react-icons/fa";
import { IoBrushOutline, IoCameraOutline } from "react-icons/io5";
import { PiMagicWand } from "react-icons/pi";

const grey = "rgb(74, 72, 70)";

export const services = [
  {
    title: "Kreativní kampaně",
    description:
      "Odemkněte potenciál vaší značky s našimi inovativními kampaněmi, které osloví a zaujmou vaše publikum.",
    icon: <FaRegLightbulb color={grey} />,
  },
  {
    title: "Produkční služby",
    description:
      "Oživte svou vizi s našimi produkčními službami, od konceptu až po finální realizaci.",
    icon: <FaCogs color={grey} />,
  },
  {
    title: "Audiovizuální produkce",
    description:
      "Upoutejte své publikum našimi kvalitními audiovizuálními produkcemi od scénáře po postprodukci.",
    icon: <FaFilm color={grey} />,
  },
  {
    title: "Fotografické služby",
    description:
      "Pozvedněte vizuální identitu vaší značky s profesionální fotografií, zachycující jedinečné momenty.",
    icon: <IoCameraOutline color={grey} />,
  },
  {
    title: "Animovaná videa, 3D grafika a VFX",
    description:
      "Oživte své nápady s našimi animovanými videi, 3D grafikou a vizuálními efekty.",
    icon: <PiMagicWand color={grey} />,
  },
  {
    title: "Grafické služby",
    description:
      "Pozvedněte vizuální identitu vaší značky s našimi profesionálními grafickými službami.",
    icon: <IoBrushOutline color={grey} />,
  },
];
