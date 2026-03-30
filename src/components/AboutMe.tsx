import { useSelector } from "react-redux";
import { RootState } from "../main";

export const AboutMe = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className="text-teal-950">
      <h1 className="text-2xl">
        {language === "en" ? "Summary" : "Resumen"}
      </h1>
      <p
        className="
          mt-2
          text-sm text-neutral-800  whitespace-pre-line
        "
      >
        {language === "en"
          ? `Full Stack Developer with hands-on experience building and integrating REST APIs, designing modular backend architectures, and developing frontend components in React. Background in Industrial Engineering enables a strong ability to analyze business workflows, identify operational inefficiencies, and translate them into scalable technical solutions. Currently expanding cloud expertise through AWS re/Start (Encora). Motivated to contribute to fast-paced environments by building reliable and adaptable full stack solutions.`
          : `Desarrollador Full Stack con experiencia práctica en la construcción e integración de APIs REST, diseño de arquitecturas backend modulares y desarrollo de componentes frontend en React. Mi formación en Ingeniería Industrial me permite analizar flujos de trabajo empresariales, identificar ineficiencias operativas y traducirlas en soluciones técnicas escalables. Actualmente ampliando conocimientos en la nube a través de AWS re/Start (Encora). Motivado para contribuir en entornos dinámicos mediante la creación de soluciones full stack fiables y adaptables.`}
      </p>
    </div>
  );
};
