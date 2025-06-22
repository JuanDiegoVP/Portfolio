import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import avatar from "../assets/avatarDev.png";
import { Project } from "../components/Project";
import { ecommerceInfo } from "../lib/ProjectsInfo";
import { useSelector } from "react-redux";
import { RootState } from "../main";

export const Portfolio = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <main className="bg-white px-10 pb-5 md:px-20 lg:px-40">
      <section className="h-screen">
        <div className="text-center px-2 py-2 ">
          <h2 className="text-5xl sm:py-5 py-10 text-teal-600 font-medium md:text-5xl">
            {language === "en"
              ? "Hi, I'm Diego Vargas"
              : "Hola, soy Diego Vargas"}
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">
            {language === "en"
              ? "React JS Developer"
              : "Desarrollador React JS"}
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800 md:text-md max-w-xl mx-auto">
            {language === "en"
              ? "I am passionate about software development, looking to improve my skills and positively impact the projects I participate in."
              : "Soy un apasionado del desarrollo de software, buscando mejorar mis habilidades y tener un impacto positivo en los proyectos en los que participo."}{" "}
          </p>
        </div>

        <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-48 h-48 md:w-80 md:h-80 sm:w-56 sm:h-56 mx-auto mt-2 overflow-hidden">
          <img src={avatar} alt="profile-avatar" />
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
          <p className="text-md py-2 leading-8 text-gray-800">
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
