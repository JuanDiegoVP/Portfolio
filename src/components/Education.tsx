import { useSelector } from "react-redux";
import { RootState } from "../main";

export const Education = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div>
      <h1 className="text-2xl mb-4 text-teal-950">
        {language === "en" ? "My education" : "Educación"}
      </h1>
      <div className="flex flex-col mb-5">
        <p className="text-teal-900">
          <strong>AWS re/Start Program</strong>
          {language === "en"
            ? " — Cloud Computing Training (Encora)"
            : " — Capacitación en Computación en la Nube (Encora)"}
        </p>
        <p className="text-xs text-neutral-600 mb-1">
          {language === "en"
            ? "Jan 2026 - Present"
            : "Ene 2026 - Presente"}
        </p>
        <div>
          <ol className="list-disc ml-8 text-neutral-600 text-xs">
            <li>
              {language === "en"
                ? "Completing hands-on training in cloud fundamentals: EC2, IAM, VPC, S3, networking, security, and DevOps basics."
                : "Completando capacitación práctica en fundamentos de la nube: EC2, IAM, VPC, S3, redes, seguridad y conceptos básicos de DevOps."}
            </li>
            <li>
              {language === "en"
                ? "Developing practical scripting skills in Python for cloud automation tasks."
                : "Desarrollando habilidades prácticas de scripting en Python para tareas de automatización en la nube."}
            </li>
          </ol>
        </div>
      </div>
      <div className="flex flex-col mb-5">
        <p className="text-teal-900">
          <strong>B.Sc. Industrial Engineering</strong>
          {language === "en"
            ? " — Hermosillo Institute of Technology"
            : " — Instituto Tecnológico de Hermosillo"}
        </p>
        <p className="text-xs text-neutral-600 mb-1">2011 - 2017</p>
        <div>
          <ol className="list-disc ml-8 text-neutral-600 text-xs">
            <li>
              {language === "en"
                ? "Foundation in process analysis, systems optimization, operations management, and data-driven decision making — directly applicable to understanding and translating client business processes into technical implementations."
                : "Fundamentos en análisis de procesos, optimización de sistemas, gestión de operaciones y toma de decisiones basada en datos — directamente aplicables para comprender y traducir los procesos de negocio de los clientes en implementaciones técnicas."}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
