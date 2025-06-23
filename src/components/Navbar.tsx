import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { FaLanguage } from "react-icons/fa";
import { RootState } from "../main";

import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "../reducers/resume/ResumeSlice";
import { setLanguage } from "../reducers/language/LanguageSlice";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLenguage, setToggleLanguage] = useState(false);
  const { activeSection } = useSelector((state: RootState) => state.resume);
  const { language } = useSelector((state: RootState) => state.language);

  const dispatch = useDispatch();

  const { pathname } = useLocation();
  // How to put a min-h minus navbar height in tailwindcss?
  // You can use the `min-h-screen` class to set the minimum height of an element to the full height of the viewport, minus the height of the navbar. To achieve this, you can use a combination of `min-h-screen` and a custom height for the navbar.
  // For example, if your navbar has a height of 60px, you can set the min-height of the main content to `min-h-[calc(100vh-60px)]`.
  return (
    <nav
      className={`flex sm:justify-between ${
        pathname === "/resume" ? "justify-between" : "justify-end"
      } py-3 px-5 mb-2 bg-white z-10`}
    >
      {pathname === "/" && (
        <h1
          className={`text-xl font-bold bg-gradient-to-r from-cyan-700 to-teal-800 bg-clip-text text-transparent sm:block hidden`}
        >
          DiegoVargas
        </h1>
      )}
      {pathname === "/resume" && (
        <>
          <h1
            className={`text-xl font-bold bg-gradient-to-r from-cyan-700 to-teal-800 bg-clip-text text-transparent sm:block hidden`}
          >
            DiegoVargas
          </h1>
          <button
            onClick={() => setToggleMenu((prev) => !prev)}
            className="text-2xl sm:hidden text-teal-900 hover:text-teal-700 transition-colors duration-500 cursor-pointer"
          >
            {toggleMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </>
      )}

      <ul className="flex items-center gap-1.5">
        <li>
          <Link
            to={"/"}
            className={`px-4 py-2 ${
              pathname === "/"
                ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md cursor-pointer"
                : "text-teal-900 hover:text-white hover:rounded-md hover:bg-gradient-to-r hover:from-teal-700 hover:to-cyan-700 transition-colors duration-500"
            }`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to={"/resume"}
            className={`px-4 py-2 ${
              pathname === "/resume"
                ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md cursor-pointer"
                : "text-teal-900 hover:text-white hover:rounded-md hover:bg-gradient-to-r hover:from-teal-700 hover:to-cyan-700 transition-colors duration-500"
            }`}
          >
            {language === "en" ? "Resume" : "Currículum"}
          </Link>
        </li>
        <li>
          <button
            onClick={() => setToggleLanguage((prev) => !prev)}
            className={`flex cursor-pointer px-1 ${"text-teal-900 hover:text-white hover:rounded-md hover:bg-gradient-to-r hover:from-teal-700 hover:to-cyan-700 transition-colors duration-500"}`}
          >
            <FaLanguage className="text-4xl" />
          </button>
        </li>
      </ul>
      {toggleMenu && (
        <ul className="flex flex-col gap-2 absolute top-16 left-1 bg-white shadow-lg rounded-md p-4 sm:hidden border-1 border-neutral-500">
          <button
            onClick={() => {
              setToggleMenu(false);
              dispatch(setActiveSection("AboutMe"));
            }}
            className={`${
              activeSection === "AboutMe"
                ? "bg-teal-800 text-white"
                : "bg-neutral-300 text-teal-900"
            } py-1.5 md:px-18 px-7 font-semibold rounded-md hover:bg-teal-800 hover:text-white transition-colors duration-500 cursor-pointer`}
          >
            {language === "en" ? "About me" : "Sobre mí"}
          </button>
          <button
            onClick={() => {
              setToggleMenu(false);
              dispatch(setActiveSection("Experience"));
            }}
            className={`${
              activeSection === "Experience"
                ? "bg-teal-800 text-white"
                : "bg-neutral-300 text-teal-900"
            } py-1.5 md:px-18 font-semibold rounded-md hover:bg-teal-800 hover:text-white transition-colors duration-500 cursor-pointer`}
          >
            {language === "en" ? "Experience" : "Experiencia"}
          </button>
          <button
            onClick={() => {
              setToggleMenu(false);
              dispatch(setActiveSection("Skills"));
            }}
            className={`${
              activeSection === "Skills"
                ? "bg-teal-800 text-white"
                : "bg-neutral-300 text-teal-900"
            } py-1.5 md:px-18 font-semibold rounded-md hover:bg-teal-800 hover:text-white transition-colors duration-500 cursor-pointer`}
          >
            {language === "en" ? "Skills" : "Habilidades"}
          </button>
          <button
            onClick={() => {
              setToggleMenu(false);
              dispatch(setActiveSection("Education"));
            }}
            className={`${
              activeSection === "Education"
                ? "bg-teal-800 text-white"
                : "bg-neutral-300 text-teal-900"
            } py-1.5 md:px-18 font-semibold rounded-md hover:bg-teal-800 hover:text-white transition-colors duration-500 cursor-pointer`}
          >
            {language === "en" ? "Education" : "Educación"}
          </button>
        </ul>
      )}
      {toggleLenguage && (
        <ul className="flex flex-col gap-2 absolute top-16 right-1 bg-white shadow-lg rounded-md p-4 border-1 border-neutral-500">
          <button
            onClick={() => {
              setToggleLanguage(false);
              dispatch(setLanguage("en"));
            }}
            className={`${
              language === "en"
                ? "bg-teal-800 text-white"
                : "bg-neutral-300 text-teal-900"
            } py-1.5 md:px-18 px-7 font-semibold rounded-md hover:bg-teal-800 hover:text-white transition-colors duration-500 cursor-pointer`}
          >
            English
          </button>
          <button
            onClick={() => {
              setToggleLanguage(false);
              dispatch(setLanguage("es"));
            }}
            className={`${
              language === "es"
                ? "bg-teal-800 text-white"
                : "bg-neutral-300 text-teal-900"
            } py-1.5 md:px-18 px-7 font-semibold rounded-md hover:bg-teal-800 hover:text-white transition-colors duration-500 cursor-pointer`}
          >
            Español
          </button>
        </ul>
      )}
    </nav>
  );
};
