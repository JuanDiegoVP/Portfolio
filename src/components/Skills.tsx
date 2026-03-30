import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiAmazon,
  SiGit,
  SiGithub,
  SiLinux,
} from "react-icons/si";
import { useSelector } from "react-redux";
import { RootState } from "../main";
export const Skills = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div>
      <h1 className="text-2xl mb-4 text-teal-950">
        {language === "en" ? "Technical Skills" : "Habilidades Técnicas"}
      </h1>

      <div className="grid grid-cols-3 gap-2 text-neutral-600 text-xs">
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiJavascript className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">
            JavaScript
          </span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiReact className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">React</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiTypescript className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">TypeScript</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiNodedotjs className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">Node.js</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiExpress className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">Express</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiMongodb className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">MongoDB</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiRedux className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">Redux</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiTailwindcss className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">Tailwind CSS</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiPython className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">Python</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiHtml5 className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">HTML5</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiCss3 className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">CSS3</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiAmazon className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">AWS</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiGit className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">Git</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiGithub className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">GitHub</span>
        </span>
        <span className="flex flex-col items-center justify-center p-6 sm:p-10 rounded border-2 border-teal-800 shadow">
          <SiLinux className="text-2xl lg:text-4xl text-teal-800" />
          <span className="mt-2 text-sm text-teal-900 font-medium">Linux</span>
        </span>
      </div>
    </div>
  );
};
