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
              <strong>OrderHub</strong>
              {language === "en"
                ? " — Full Stack Web Application (Personal project)"
                : " — Aplicación Web Full Stack (Proyecto personal)"}
            </p>{" "}
          </span>
          <p className="text-xs text-neutral-600 mb-1">
            {language === "en"
              ? "Feb 2026 - Present"
              : "Feb 2026 - Presente"}
          </p>
          <p className="text-neutral-800">
            {language === "en"
              ? "APPLIED TECHNOLOGIES"
              : "TECNOLOGÍAS APLICADAS"}
          </p>
          <p className="text-xs text-teal-700 mb-1">
            Node.js | Express | React | Git | Postman | curl
          </p>
          <div>
            <ol className="list-disc ml-8 text-neutral-600 text-xs">
              <li>
                {language === "en"
                  ? "Designed and developed a modular REST API using Node.js and Express to handle order management, request validation, and business logic."
                  : "Diseñé y desarrollé una API REST modular usando Node.js y Express para manejar la gestión de pedidos, validación de solicitudes y lógica de negocio."}
              </li>
              <li>
                {language === "en"
                  ? "Implemented CRUD operations and lifecycle management, improving data organization and system reliability."
                  : "Implementé operaciones CRUD y gestión del ciclo de vida, mejorando la organización de datos y la confiabilidad del sistema."}
              </li>
              <li>
                {language === "en"
                  ? "Structured the application following separation of concerns to improve maintainability and scalability."
                  : "Estructuré la aplicación siguiendo la separación de responsabilidades para mejorar la mantenibilidad y escalabilidad."}
              </li>
              <li>
                {language === "en"
                  ? "Tested API endpoints using Postman and curl to ensure correct functionality and proper error handling."
                  : "Probé los endpoints de la API usando Postman y curl para asegurar la funcionalidad correcta y el manejo adecuado de errores."}
              </li>
              <li>
                {language === "en"
                  ? "Designed frontend components using React to support user interaction (in progress)."
                  : "Diseñé componentes frontend usando React para apoyar la interacción del usuario (en progreso)."}
              </li>
              <li>
                {language === "en"
                  ? "Managed source control using Git with a structured workflow (main/develop/feature branches)."
                  : "Gestioné el control de versiones usando Git con un flujo de trabajo estructurado (ramas main/develop/feature)."}
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <span className="flex items-center gap-2">
            <p className="text-teal-900">
              <strong>Delivery App</strong>
              {language === "en"
                ? " — Frutería Madrid (Personal project)"
                : " — Frutería Madrid (Proyecto personal)"}
            </p>{" "}
          </span>
          <p className="text-xs text-neutral-600 mb-1">
            {language === "en"
              ? "Dec 2024 - Aug 2025"
              : "Dic 2024 - Ago 2025"}
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
            <ol className="list-disc ml-8 text-neutral-600 text-xs">
              <li>
                {language === "en"
                  ? "Analyzed end-to-end business workflows of a delivery operation to identify bottlenecks, reduce manual processes, and define system requirements for a custom web application."
                  : "Analicé los flujos de trabajo empresariales de una operación de entrega para identificar cuellos de botella, reducir procesos manuales y definir los requisitos del sistema para una aplicación web personalizada."}
              </li>
              <li>
                {language === "en"
                  ? "Translated operational challenges into a technical solution design, improving data flows for order tracking and inventory visibility — reducing potential order processing time by up to 5 hours."
                  : "Traduje los desafíos operativos en un diseño de solución técnica, mejorando los flujos de datos para el seguimiento de pedidos y la visibilidad del inventario — reduciendo el tiempo potencial de procesamiento de pedidos en hasta 5 horas."}
              </li>
              <li>
                {language === "en"
                  ? "Estimated cost reduction of up to $10,892 MXN by automating order management workflows previously handled manually."
                  : "Estimé una reducción de costos de hasta $10,892 MXN mediante la automatización de flujos de trabajo de gestión de pedidos que anteriormente se manejaban manualmente."}
              </li>
              <li>
                {language === "en"
                  ? "Bridged Industrial Engineering analytical methods with software development to produce a business-driven solution architecture (implementation in progress)."
                  : "Combiné los métodos analíticos de Ingeniería Industrial con el desarrollo de software para producir una arquitectura de solución orientada al negocio (implementación en progreso)."}
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
              ? "2022 - 2023"
              : "2022 - 2023"}
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
