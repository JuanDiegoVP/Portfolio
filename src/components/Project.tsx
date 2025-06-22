import React, { useState } from "react";
import { RootState } from "../main";
import { useSelector } from "react-redux";

interface ProjectProps {
  projectInfo: {
    titleEnglish: string;
    titleSpanish: string;
    descriptionEnglish: string;
    descriptionSpanish: string;
    icons: {
      icon: React.ElementType;
      color: string;
    }[];
    images: string[];
  };
}

export const Project = ({ projectInfo }: ProjectProps) => {
  const [showDescription, setShowDescription] = useState(
    projectInfo.descriptionEnglish.length > 50 ? false : true
  );
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div>
      <div className="sm:flex items-center gap-5">
        <h3 className="text-xl text-teal-900 py-1">
          {language === "en"
            ? projectInfo.titleEnglish
            : projectInfo.titleSpanish}
        </h3>
        <div className="flex items-center gap-2">
          {projectInfo.icons.map((icon, index) => {
            const IconComponent = icon.icon;
            return (
              <IconComponent
                key={index}
                className="inline-block text-2xl"
                style={{ color: icon.color }}
              />
            );
          })}
        </div>
      </div>
      <p className="text-sm py-2 text-gray-800">
        {projectInfo.descriptionEnglish.length > 50
          ? showDescription
            ? language === "en"
              ? projectInfo.descriptionEnglish + " "
              : projectInfo.descriptionSpanish + " "
            : language === "en"
            ? `${projectInfo.descriptionEnglish.slice(0, 50)}... `
            : `${projectInfo.descriptionSpanish.slice(0, 50)}... `
          : language === "en"
          ? projectInfo.descriptionEnglish
          : projectInfo.descriptionSpanish}
        <button
          onClick={() => setShowDescription(!showDescription)}
          className="text-xs text-teal-600 hover:text-teal-800 transition-colors duration-300 cursor-pointer"
        >
          {projectInfo.descriptionEnglish.length > 50
            ? showDescription
              ? language === "en"
                ? "Show less"
                : "Mostrar menos"
              : language === "en"
              ? "Read more"
              : "Leer más"
            : ""}
        </button>
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-2">
        {projectInfo.images.map((image, index) => (
          <div key={index} className="basis-1/3 flex-1">
            <img
              src={image}
              alt={`Project image ${projectInfo.titleEnglish}`}
              className="p-3 bg-[#d0d7e2] rounded-lg object-cover"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
