import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import avatar from "../assets/avatarDev.png";
import { Project } from "../components/Project";
import { ecommerceInfo } from "../lib/ProjectsInfo";
import { useSelector } from "react-redux";
import { RootState } from "../main";
import { CiMail } from "react-icons/ci";

export const Portfolio = () => {
  const { language } = useSelector((state: RootState) => state.language);

  const a = [1, 2, 3, 4, 1, 2, 3];

  const numbers = a.filter((item, index) => a.indexOf(item) === index);
  console.log(numbers); // [1, 2, 3, 4]
  const repetitions = new Array(numbers.length).fill(0);

  numbers.map((item) => {
    a.map((el) => {
      if (item == el) {
        repetitions[numbers.indexOf(item)]++;
      }
    });
  });

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
            xs:py-2
            text-4xl text-teal-600 font-medium lg:text-7xl md:text-6xl xs:text-4xl"
          >
            {language === "en"
              ? "Hi, I'm Juan Diego Vargas"
              : "Hola, soy Juan Diego Vargas"}
          </h2>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-900 tracking-wide">
            {language === "en"
              ? "Full Stack Web Developer"
              : "Desarrollador Web Full Stack"}
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
        <span
          className="
                    flex items-center gap-1 
                    mt-2
                "
        >
          <CiMail className="text-xl text-teal-600" />
          <p className="text-md text-teal-900">
            ing.juandiego.vargas@gmail.com
          </p>
        </span>
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
        <Project projectInfo={ecommerceInfo.orderHub} />
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
