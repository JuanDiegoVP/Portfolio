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
        <span className="flex items-center gap-2">
          <p className="font-bold text-teal-900">
            {language === "en"
              ? "JavaScript Developer"
              : "Desarrollador JavaScript"}
          </p>{" "}
          <p className="text-teal-900">
            {language === "en" ? "at freeCodeCamp" : "en freeCodeCamp"}
          </p>
        </span>
        <p className="text-xs text-neutral-600 mb-1">
          {language === "en"
            ? "December 2022 - November 2024 [Hermosillo, Sonora, Mex.]"
            : "Diciembre 2022 - Noviembre 2024 [Hermosillo, Sonora, Mex.]"}
        </p>
      </div>
      <div className="flex flex-col mb-5">
        <span className="flex items-center gap-2">
          <p className="font-bold text-teal-900">
            {language === "en"
              ? "Industrial engineering"
              : "Ingeniería industrial"}
          </p>{" "}
          <p className="text-teal-900">
            {language === "en"
              ? "at Hermosillo Institute of Technology"
              : "en Instituto Tecnológico de Hermosillo"}
          </p>
        </span>
        <p className="text-xs text-neutral-600 mb-1">
          {language === "en"
            ? "2011 - 2017 [Hermosillo, Sonora, Mex.]"
            : "2011 - 2017 [Hermosillo, Sonora, Mex.]"}
        </p>
      </div>
    </div>
  );
};
