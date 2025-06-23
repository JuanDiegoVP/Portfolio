import { CiMail } from "react-icons/ci";
import { useSelector } from "react-redux";
import { RootState } from "../main";

export const AboutMe = () => {
  const { language } = useSelector((state: RootState) => state.language);

  // Layout & Container Classes: container, mx-auto, flex, grid, columns-*, space-*, gap-*, order-*
  // Spacing & Positioning Classes: p-*, m-*, mt-*, mb-*, ml-*, mr-*, absolute, relative, fixed, sticky
  // Size & Dimension Classes: w-*, h-*, min-w-*, min-h-*, max-w-*, max-h-*,
  // Typography Classes: text-*, font-*, leading-*, tracking-*, pre-line, whitespace-*, text-ellipsis, text-overflow-*
  // Visual Styles: bg-*, border-*, shadow-*, ring-*, outline-*
  // Interactive states: hover:*, focus:*, active:*, disabled:*

  return (
    <div className="text-teal-950">
      <h1 className="text-2xl">
        {language === "en" ? "About me" : "Sobre mí"}
      </h1>
      <p
        className="
          mt-2
          text-sm text-neutral-800  whitespace-pre-line
        "
      >
        {language === "en"
          ? `Hi, I am a software developer with more than 1 year of experience in technologies such as JavaScript and React. I have also built personal projects where I have used technologies such as TypeScript | Node.Js | Express | SQL | MongoDB | Redux Toolkit | Tailwind | Bootstrap and others.
        
        I am looking for an opportunity to develop professionally as a software engineer and contribute positively to the projects I participate in. In the meantime, I keep learning and practicing, developing applications that improve my knowledge. 

        As an industrial engineer graduated from the Hermosillo Institute of Technology, my academic training and professional experience focus on continuous improvement and process optimization. Therefore, I always seek to actively contribute to the development of technological solutions that positively impact operational efficiency and customer experience.`
          : `Hola, soy un desarrollador de software con más de 1 año de experiencia en tecnologías como JavaScript y React. También he construido proyectos personales donde he utilizado tecnologías como TypeScript | Node.Js | Express | SQL | MongoDB | Redux Toolkit | Tailwind | Bootstrap y otras.

        Estoy buscando una oportunidad para desarrollarme profesionalmente como ingeniero de software y contribuir positivamente a los proyectos en los que participo. Mientras tanto, sigo aprendiendo y practicando, desarrollando aplicaciones que mejoran mis conocimientos.

        Como ingeniero industrial graduado del Instituto Tecnológico de Hermosillo, mi formación académica y experiencia profesional se centran en la mejora continua y la optimización de procesos. Por lo tanto, siempre busco contribuir activamente al desarrollo de soluciones tecnológicas que impacten positivamente en la eficiencia operativa y la experiencia del cliente.`}
      </p>
      <h2
        className="
            mt-7 
            text-xl
          "
      >
        {language === "en" ? "Contact" : "Contacto"}
      </h2>
      <span
        className="
          flex items-center gap-1 
          mt-2
      "
      >
        <CiMail className="text-xl text-teal-600" />
        <p className="text-md text-teal-900">ing.juandiego.vargas@gmail.com</p>
      </span>
    </div>
  );
};
