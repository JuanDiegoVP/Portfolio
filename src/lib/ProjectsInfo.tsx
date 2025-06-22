import distriApp from "../assets/distriApp.png";
import distriCheckout from "../assets/distriCheckout.png";
import distriProducts from "../assets/distriProducts.png";
import mernStackProject from "../assets/mernStackApp.png";
import mernStackCart from "../assets/mernStackCheckout.png";
import mernStackDashboard from "../assets/mernStackDashboard.png";
import todoApp from "../assets/todoApp.png";
import todoAppEdit from "../assets/todoAppEdit.png";
import todoAppDelete from "../assets/todoAppDelete.png";
import calculator from "../assets/calculator.png";
import calculatorAdd from "../assets/calculatorAdd.png";
import calculatorMultiplication from "../assets/calculatorMultiplication.png";
import twentyFiveClock from "../assets/twentyFiveClock.png";
import twentyFiveClockRun from "../assets/twentyFiveClockRun.png";
import twentyFiveClockLight from "../assets/twentyFiveClockLight.png";
import drumMachineDark from "../assets/drumMachineDark.png";
import drumMachineClap from "../assets/drumMachineClap.png";
import drumMachine from "../assets/drumMachine.png";
import markdownPreviewer from "../assets/markdownPreviewer.png";
import markdownPreviewerEditor from "../assets/markdownPreviewerEditor.png";
import markdownPreviewerPrevi from "../assets/markdownPreviewerPrevi.png";
import randomQuoteMachine from "../assets/randomQuoteMachine.png";
import randomQuoteMachineAbu from "../assets/randomQuoteMachineAbu.png";
import randomQuoteMachineAris from "../assets/randomQuoteMachineAris.png";

import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const ecommerceInfo = {
  ecommerceProject: {
    titleEnglish: "Delivery App for a local company",
    titleSpanish: "Delivery App para una empresa local",
    icons: [
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        icon: SiRedux,
        color: "#764ABC",
      },
      {
        icon: FaNodeJs,
        color: "#68A063",
      },
      {
        icon: SiExpress,
        color: "#000000",
      },
      {
        icon: SiMongodb,
        color: "#00684A",
      },
    ],
    descriptionEnglish:
      "Currently I am working on a full-stack e-commerce application using the MERN stack (MongoDB, Express.js, React.js, Node.js) and with Redux for state management. This project includes features such as product management, user authentication, and a shopping cart system. The application is designed to provide a seamless user experience, allowing users to browse products, add them to their cart, and proceed to checkout. The backend is built with Express.js and Node.js, providing a robust API for handling requests and managing data in MongoDB. The frontend is developed using React.js, ensuring a responsive and dynamic user interface. Redux is used to manage the application state, making it easier to handle complex interactions and data flow. This is a personal project to help this local company and for me to improve my skills in full-stack development.",
    descriptionSpanish:
      "Actualmente estoy trabajando en una aplicación de comercio electrónico full-stack utilizando el stack MERN (MongoDB, Express.js, React.js, Node.js) y Redux para la gestión del estado. Este proyecto incluye características como la gestión de productos, autenticación de usuarios y un sistema de carrito de compras. La aplicación está diseñada para proporcionar una experiencia de usuario fluida, permitiendo a los usuarios navegar por los productos, agregarlos a su carrito y proceder al pago. El backend está construido con Express.js y Node.js, proporcionando una API robusta para manejar solicitudes y gestionar datos en MongoDB. El frontend se desarrolla utilizando React.js, asegurando una interfaz de usuario receptiva y dinámica. Redux se utiliza para gestionar el estado de la aplicación, facilitando el manejo de interacciones complejas y el flujo de datos. Este es un proyecto personal para ayudar a esta empresa local y para mejorar mis habilidades en desarrollo full-stack.",
    images: [distriApp, distriProducts, distriCheckout],
  },
  mernStackProject: {
    titleEnglish: "MERN Stack Project",
    titleSpanish: "Proyecto MERN Stack",
    icons: [
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        icon: SiRedux,
        color: "#764ABC",
      },
      {
        icon: FaNodeJs,
        color: "#68A063",
      },
      {
        icon: SiExpress,
        color: "#000000",
      },
      {
        icon: SiMongodb,
        color: "#00684A",
      },
    ],
    descriptionEnglish:
      "This is a freeCodeCamp MERN Stack project where I built the front-end and back-end of a online book store web site. Here you can find a list of books, add new books, edit existing books, and delete books. The project uses React for the front-end, Node.js and Express for the back-end, and MongoDB for the database.",
    descriptionSpanish:
      "Este es un proyecto MERN Stack de freeCodeCamp donde construí el front-end y el back-end de un sitio web de tienda de libros en línea. Aquí puedes encontrar una lista de libros, agregar nuevos libros, editar libros existentes y eliminar libros. El proyecto utiliza React para el front-end, Node.js y Express para el back-end, y MongoDB para la base de datos.",
    images: [mernStackProject, mernStackCart, mernStackDashboard],
  },
  todoApp: {
    titleEnglish: "Todo App",
    titleSpanish: "Aplicación de Tareas",
    icons: [
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
    descriptionEnglish:
      "A simple Todo App built with React and TypeScript. It allows users to add, edit, and delete tasks, providing a clean and intuitive interface for task management.",
    descriptionSpanish:
      "Una aplicación de tareas simple construida con React y TypeScript. Permite a los usuarios agregar, editar y eliminar tareas, proporcionando una interfaz limpia e intuitiva para la gestión de tareas.",
    images: [todoApp, todoAppEdit, todoAppDelete],
  },
  calculator: {
    titleEnglish: "Calculator",
    titleSpanish: "Calculadora",
    icons: [
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiRedux,
        color: "#764ABC",
      },
    ],
    descriptionEnglish:
      "A calculator application that I developed as part of a freeCodeCamp challenge. It is a simple yet functional calculator that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The project is built using React and Tailwind CSS, providing a responsive and user-friendly interface. The calculator supports both keyboard and mouse input, making it easy to use on various devices.",
    descriptionSpanish:
      "Una aplicación de calculadora que desarrollé como parte de un desafío de freeCodeCamp. Es una calculadora simple pero funcional que realiza operaciones aritméticas básicas como suma, resta, multiplicación y división. El proyecto está construido con React y Tailwind CSS, proporcionando una interfaz receptiva y fácil de usar. La calculadora admite tanto entrada por teclado como por mouse, lo que facilita su uso en varios dispositivos.",
    images: [calculator, calculatorAdd, calculatorMultiplication],
  },
  twentyFiveClock: {
    titleEnglish: "25 Clock",
    titleSpanish: "Reloj de 25 minutos",
    icons: [
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        icon: SiRedux,
        color: "#764ABC",
      },
    ],
    descriptionEnglish:
      "A 25-minute timer application that I developed as part of a freeCodeCamp challenge. It is a simple yet functional timer that allows users to set a 25-minute countdown for productivity sessions. The project is built using React and Tailwind CSS, providing a responsive and user-friendly interface with a light and dark mode.",
    descriptionSpanish:
      "Una aplicación de temporizador de 25 minutos que desarrollé como parte de un desafío de freeCodeCamp. Es un temporizador simple pero funcional que permite a los usuarios establecer una cuenta regresiva de 25 minutos para sesiones de productividad. El proyecto está construido con React y Tailwind CSS, proporcionando una interfaz receptiva y fácil de usar con un modo claro y oscuro.",
    images: [twentyFiveClock, twentyFiveClockRun, twentyFiveClockLight],
  },
  drumMachine: {
    titleEnglish: "Drum Machine",
    titleSpanish: "Máquina de Ritmos",
    icons: [
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
    descriptionEnglish:
      "A drum machine application that I developed as part of a freeCodeCamp challenge. It allows users to play different drum sounds by clicking on buttons or using keyboard keys. The project is built using React and Tailwind CSS, providing a responsive and user-friendly interface whit a light and dark mode.",
    descriptionSpanish:
      "Una aplicación de máquina de ritmos que desarrollé como parte de un desafío de freeCamp. Permite a los usuarios reproducir diferentes sonidos de batería haciendo clic en botones o utilizando teclas del teclado. El proyecto está construido con React y Tailwind CSS, proporcionando una interfaz receptiva y fácil de usar con un modo claro y oscuro.",
    images: [drumMachineDark, drumMachineClap, drumMachine],
  },
  markdownPreviewer: {
    titleEnglish: "Markdown Previewer",
    titleSpanish: "Previsualizador de Markdown",
    icons: [
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        icon: SiRedux,
        color: "#764ABC",
      },
    ],
    descriptionEnglish:
      "A Markdown previewer application that I developed as part of a freeCodeCamp challenge. It allows users to write Markdown text and see a live preview of the formatted output. The project is built using React and Tailwind CSS, providing a responsive and user-friendly interface.",
    descriptionSpanish:
      "Una aplicación de previsualización de Markdown que desarrollé como parte de un desafío de freeCodeCamp. Permite a los usuarios escribir texto en Markdown y ver una vista previa en vivo del resultado formateado. El proyecto está construido con React y Tailwind CSS, proporcionando una interfaz receptiva y fácil de usar.",
    images: [
      markdownPreviewer,
      markdownPreviewerEditor,
      markdownPreviewerPrevi,
    ],
  },
  randomQuoteMachine: {
    titleEnglish: "Random Quote Machine",
    titleSpanish: "Generador de Citas Aleatorias",
    icons: [
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiBootstrap,
        color: "#7952B3",
      },
    ],
    descriptionEnglish:
      "A random quote machine application that I developed as part of a freeCodeCamp challenge. It displays a random quote each time the user clicks a button, providing inspiration and motivation. The project is built using React and Bootstrap, ensuring a responsive and visually appealing interface.",
    descriptionSpanish:
      "Una aplicación de generador de citas aleatorias que desarrollé como parte de un desafío de freeCodeCamp. Muestra una cita aleatoria cada vez que el usuario hace clic en un botón, proporcionando inspiración y motivación. El proyecto está construido con React y Bootstrap, asegurando una interfaz receptiva y visualmente atractiva.",
    images: [randomQuoteMachine, randomQuoteMachineAbu, randomQuoteMachineAris],
  },
};
