import { useSelector } from "react-redux";
import { RootState } from "../main";

export const Experience = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div>
      <h1 className="text-2xl mb-4 text-teal-950">
        {language === "en" ? "My experience" : "Experiencia"}
      </h1>
      <div className="">
        <div className="flex flex-col mb-5">
          <span className="flex items-center gap-2">
            <p className="text-teal-900">
              <strong>Delivery App</strong>
              {language === "en"
                ? " for Frutería Madrid (Personal project)"
                : " para Frutería Madrid (Proyecto personal)"}
            </p>{" "}
          </span>
          <p className="text-xs text-neutral-600 mb-1">
            {language === "en"
              ? "October 2024 - Present [Hermosillo, Sonora, Mex.]"
              : "Octubre 2024 - Presente [Hermosillo, Sonora, Mex.]"}
          </p>
          <p className="text-neutral-800">
            {language === "en"
              ? "APPLIED TECHNOLOGIES"
              : "TECNOLOGÍAS APLICADAS"}
          </p>
          <p className="text-xs text-teal-700 mb-1">
            JavaScript | React | TypeScript | Node.js | Express | MongoDB |
            Redux Toolkit | Tailwind
          </p>
          <div>
            <p className="text-neutral-800">
              {language === "en" ? "OBJECTIVES" : "OBJETIVOS"}
            </p>
            <ol className="list-disc ml-8 text-neutral-600 text-xs">
              <li>
                {language === "en"
                  ? "Build an app to reduce the order taking times by up to 5 hours."
                  : "Crear una aplicación para reducir los tiempos de toma de pedidos en hasta 5 horas."}
              </li>
              <li>
                {language === "en"
                  ? "Improve the preparation times by up to 33%."
                  : "Mejorar los tiempos de preparación en hasta un 33%."}
              </li>
              <li>
                {language === "en"
                  ? "Reduce overtime expenses by up to $10,892.00 MXN monthly."
                  : "Reducir los gastos de horas extras en hasta $10,892.00 MXN mensuales."}
              </li>
              <li>
                {language === "en"
                  ? "Improve the workload for the employees."
                  : "Mejorar la carga de trabajo para los empleados."}
              </li>
              <li>
                {language === "en"
                  ? "Provide a tool for better process performance."
                  : "Proporcionar una herramienta para un mejor rendimiento de los procesos."}
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <span className="flex items-center gap-2">
            <p className="font-bold text-teal-900">
              {language === "en"
                ? "Projects of freeCodeCamp"
                : "Proyectos de freeCodeCamp"}
            </p>
          </span>
          <p className="text-xs text-neutral-600 mb-1">
            {language === "en"
              ? "December 2022 - Present"
              : "Diciembre 2022 - Presente"}
          </p>
          <p className="text-neutral-800">
            {language === "en"
              ? "APPLIED TECHNOLOGIES"
              : "TECNOLOGÍAS APLICADAS"}
          </p>
          <p className="text-xs text-neutral-600 mb-1">
            JavaScript | React | HTML | CSS | Bootstrap | Tailwind
          </p>
          <div>
            <p className="text-neutral-800">
              {language === "en" ? "PROJECTS" : "PROYECTOS"}
            </p>
            <ol className="grid grid-cols-2 gap-2 list-disc ml-8 text-neutral-600 text-xs">
              <li>
                <p>
                  {language === "en"
                    ? "MERN Stack Project - Book Store App"
                    : "Proyecto MERN Stack - Aplicación de tienda de libros"}
                </p>{" "}
                <p className="text-[10px] text-teal-700">
                  [JavaScript | React | Redux | Node.js | Express | MongoDB]{" "}
                </p>
              </li>
              <li>
                <p>
                  {language === "en"
                    ? "Product landing page"
                    : "Landing page de producto"}
                </p>{" "}
                <p className="text-[10px] text-teal-700">[HTML | CSS] </p>
              </li>
              <li>
                <p>
                  {language === "en"
                    ? "Personal portfolio webpage"
                    : "Página web de portfolio personal"}
                </p>{" "}
                <p className="text-[10px] text-teal-700">[HTML | CSS] </p>
              </li>
              <li>
                <p>
                  {language === "en"
                    ? "Palindrome checker"
                    : "Verificador de palíndromos"}
                </p>{" "}
                <p className="text-[10px] text-teal-700">
                  [JavaScript | HTML | CSS]{" "}
                </p>
              </li>
              <li>
                <p>
                  {language === "en"
                    ? "Roman numeral converter"
                    : "Convertidor de números romanos"}
                </p>{" "}
                <p className="text-[10px] text-teal-700">
                  [JavaScript | HTML | CSS]{" "}
                </p>
              </li>
              <li>
                <p>
                  {language === "en"
                    ? "Tribute landing page"
                    : "Página de homenaje"}
                </p>{" "}
                <p className="text-[10px] text-teal-700">[HTML | CSS] </p>
              </li>
              <li>
                <p>
                  {language === "en"
                    ? "Technical documentation page"
                    : "Página de documentación técnica"}
                </p>{" "}
                <p className="text-[10px] text-teal-700">[HTML | CSS] </p>
              </li>
              <li>
                <p>
                  {language === "en"
                    ? "Telephone number validator"
                    : "Validador de números telefónicos"}
                </p>{" "}
                <p className="text-[10px] text-teal-700">
                  [JavaScript | HTML | CSS]{" "}
                </p>
              </li>
              <li>
                <p>
                  {language === "en" ? "Cash register" : "Caja registradora"}
                </p>{" "}
                <p className="text-[10px] text-teal-700">
                  [JavaScript | HTML | CSS]{" "}
                </p>
              </li>
              <li>
                <p>
                  {language === "en"
                    ? "Pokémon search app"
                    : "Aplicación de búsqueda de Pokémon"}
                </p>{" "}
                <p className="text-[10px] text-teal-700">
                  [JavaScript | HTML | CSS]{" "}
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <span className="flex items-center gap-2">
            <p className="text-teal-900">
              <strong>
                {language === "en" ? "Business advisor" : "Asesor empresarial"}
              </strong>{" "}
              {language === "en" ? "at Frutería Madrid" : "en Frutería Madrid"}
            </p>{" "}
          </span>
          <p className="text-xs text-neutral-600 mb-1">
            {language === "en"
              ? "October 2023 - Present [Hermosillo, Sonora, Mex.]"
              : "Octubre 2023 - Presente [Hermosillo, Sonora, Mex.]"}
          </p>
        </div>
        <div className="flex flex-col mb-5">
          <span className="flex items-center gap-2">
            <p className="text-teal-900">
              <strong>
                {language === "en" ? "Production chief" : "Jefe de producción"}
              </strong>{" "}
              {language === "en" ? "at Molino La Fama" : "en Molino La Fama"}
            </p>{" "}
          </span>
          <p className="text-xs text-neutral-600 mb-1">
            {language === "en"
              ? "August 2018 - October 2023 [Hermosillo, Sonora, Mex.]"
              : "Agosto 2018 - Octubre 2023 [Hermosillo, Sonora, Mex.]"}
          </p>
        </div>
        <div className="flex flex-col mb-5">
          <span className="flex items-center gap-2">
            <p className="text-teal-900">
              <strong>
                {language === "en"
                  ? "Multi-didactic team"
                  : "Equipo multididáctico"}
              </strong>{" "}
              {language === "en" ? "at Latécoère" : "en Latécoère"}
            </p>{" "}
          </span>
          <p className="text-xs text-neutral-600 mb-1">
            2017 - 2018 [Hermosillo, Sonora, Mex.]
          </p>
        </div>
      </div>
    </div>
  );
};
