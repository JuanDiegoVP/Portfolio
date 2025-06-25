import { useDispatch, useSelector } from "react-redux";

// Redux actions
import { setActiveSection } from "../reducers/resume/ResumeSlice";
import { RootState } from "../main";
import { AboutMe } from "../components/AboutMe";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";

export const Resume = () => {
  const dispatch = useDispatch();
  const { activeSection } = useSelector((state: RootState) => state.resume);
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className="flex p-5 gap-10 justify-between w-full m-auto max-w-6xl">
      <div className="sm:flex flex-col gap-3 hidden">
        <button
          onClick={() => dispatch(setActiveSection("AboutMe"))}
          className={`${
            activeSection === "AboutMe"
              ? "bg-teal-800 text-white"
              : "bg-neutral-300 text-teal-900"
          } py-1.5 md:px-18 sm:px-7 font-semibold rounded-md hover:bg-teal-800 hover:text-white transition-colors duration-500 cursor-pointer`}
        >
          {language === "en" ? "About me" : "Sobre mí"}
        </button>
        <button
          onClick={() => dispatch(setActiveSection("Experience"))}
          className={`${
            activeSection === "Experience"
              ? "bg-teal-800 text-white"
              : "bg-neutral-300 text-teal-900"
          } py-1.5 md:px-18 font-semibold rounded-md hover:bg-teal-800 hover:text-white transition-colors duration-500 cursor-pointer`}
        >
          {language === "en" ? "Experience" : "Experiencia"}
        </button>
        <button
          onClick={() => dispatch(setActiveSection("Skills"))}
          className={`${
            activeSection === "Skills"
              ? "bg-teal-800 text-white"
              : "bg-neutral-300 text-teal-900"
          } py-1.5 md:px-18 font-semibold rounded-md hover:bg-teal-800 hover:text-white transition-colors duration-500 cursor-pointer`}
        >
          {language === "en" ? "Skills" : "Habilidades"}
        </button>
        <button
          onClick={() => dispatch(setActiveSection("Education"))}
          className={`${
            activeSection === "Education"
              ? "bg-teal-800 text-white"
              : "bg-neutral-300 text-teal-900"
          } py-1.5 md:px-18 font-semibold rounded-md hover:bg-teal-800 hover:text-white transition-colors duration-500 cursor-pointer`}
        >
          {language === "en" ? "Education" : "Educación"}
        </button>
      </div>
      <div className="h-[calc(100vh-150px)] overflow-auto flex-1 bg-neutral-100 p-2 rounded-md shadow-lg">
        {activeSection === "AboutMe" ? (
          <AboutMe />
        ) : activeSection === "Experience" ? (
          <Experience />
        ) : activeSection === "Skills" ? (
          <Skills />
        ) : (
          <Education />
        )}
      </div>
    </div>
  );
};
