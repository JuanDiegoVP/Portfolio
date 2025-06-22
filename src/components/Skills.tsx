import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useSelector } from "react-redux";
import { RootState } from "../main";
export const Skills = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div>
      <h1 className="text-2xl mb-4 text-teal-950">
        {language === "en" ? "My skills" : "Habilidades"}
      </h1>

      <div className="grid grid-cols-3 gap-2 text-neutral-600 text-xs">
        <span className="flex items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiJavascript className="text-2xl lg:text-4xl text-teal-800" />
        </span>
        <span className="flex items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiReact className="text-2xl lg:text-4xl text-teal-800" />
        </span>
        <span className="flex items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiTypescript className="text-2xl lg:text-4xl text-teal-800" />
        </span>
        <span className="flex items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiNodedotjs className="text-2xl lg:text-4xl text-teal-800" />
        </span>
        <span className="flex items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiExpress className="text-2xl lg:text-4xl text-teal-800" />
        </span>
        <span className="flex items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiMongodb className="text-2xl lg:text-4xl text-teal-800" />
        </span>
        <span className="flex items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiRedux className="text-2xl lg:text-4xl text-teal-800" />
        </span>
        <span className="flex items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiTailwindcss className="text-2xl lg:text-4xl text-teal-800" />
        </span>
      </div>
    </div>
  );
};
