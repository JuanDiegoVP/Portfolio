import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import avatar from "../assets/avatarDev.png";
import { Project } from "../components/Project";
import { ecommerceInfo } from "../lib/ProjectsInfo";
import { useSelector } from "react-redux";
import { RootState } from "../main";

// Layout & Container Classes: container, mx-auto, flex, grid, columns-*, space-*, gap-*, order-*
// Spacing & Positioning Classes: p-*, m-*, mt-*, mb-*, ml-*, mr-*, absolute, relative, fixed, sticky, md:px-20, lg:px-30, overflow-hidden
// Size & Dimension Classes: w-*, h-*, min-w-*, min-h-*, max-w-*, max-h-*,
// Typography Classes: text-*, font-*, leading-*, tracking-*, pre-line, whitespace-*, text-ellipsis, text-overflow-*, text-center, text-gray-800
// Visual Styles: bg-*, border-*, shadow-*, ring-*, outline-*
// Interactive states: hover:*, focus:*, active:*, disabled:*

// Where does the text-gray-500 class fall in the above categories?

export const Portfolio = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <main
      className="
      px-10 pb-5 lg:px-20 md:px-10 xs:px-4
    bg-white "
    >
      <section
        className="
        flex flex-col
        min-h-[calc(100vh-70px)]
        items-center justify-center 
        text-center"
      >
        <div
          className="
          p-2
          text-center"
        >
          <h2
            className="
            xs:py-4
            text-4xl text-teal-600 font-medium lg:text-7xl md:text-6xl xs:text-4xl"
          >
            {language === "en"
              ? "Hi, I'm Diego Vargas"
              : "Hola, soy Diego Vargas"}
          </h2>
          <h3
            className="
            py-2 
            text-xl md:text-3xl xs:text-2xl"
          >
            {language === "en" 
              ? "React JS Developer"
              : "Desarrollador React JS"}
          </h3>
          <p
            className="
              mx-auto
              max-w-xl
              text-xs leading-5 xs:leading-6 text-gray-800 md:text-md"
          >
            {language === "en"
              ? "I am passionate about software development, looking to improve my skills and positively impact the projects I participate in."
              : "Soy un apasionado del desarrollo de software, buscando mejorar mis habilidades y tener un impacto positivo en los proyectos en los que participo."}{" "}
          </p>
        </div>

        <div
          className="
            mx-auto 
            relative mt-2 overflow-hidden
            w-48 h-48 md:w-68 md:h-68 xs:w-62 xs:h-62
            bg-gradient-to-b from-teal-500 rounded-full"
        >
          <img
            src={avatar}
            alt="profile-avatar"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <ul className="flex justify-center gap-8">
            <a href="https://www.linkedin.com/in/juan-diego-vargas-941388251">
              <AiFillLinkedin className="cursor-pointer hover:text-teal-700 transition-colors duration-300" />
            </a>
            <a href="https://github.com/JuanDiegoVP">
              <AiFillGithub className="cursor-pointer hover:text-teal-700 transition-colors duration-300" />
            </a>
          </ul>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">
            {language === "en" ? "My Projects" : "Proyectos"}
          </h3>
          <p
            className="
              py-2
              text-sm leading-6 text-gray-800"
          >
            {language === "en"
              ? "Here are some of the projects that I have developed using various technologies. Each project reflects my skills and passion for software development. I hope you find them interesting!"
              : "Estos son algunos de los proyectos que he desarrollado utilizando diversas tecnologías. Cada proyecto refleja mis habilidades y pasión por el desarrollo de software. ¡Espero que los encuentres interesantes!"}
          </p>
        </div>
        <Project projectInfo={ecommerceInfo.ecommerceProject} />
        <Project projectInfo={ecommerceInfo.mernStackProject} />
        <Project projectInfo={ecommerceInfo.todoApp} />
        <Project projectInfo={ecommerceInfo.calculator} />
        <Project projectInfo={ecommerceInfo.twentyFiveClock} />
        <Project projectInfo={ecommerceInfo.drumMachine} />
        <Project projectInfo={ecommerceInfo.markdownPreviewer} />
        <Project projectInfo={ecommerceInfo.randomQuoteMachine} />
      </section>
    </main>
  );
};
