import { createBrowserRouter } from "react-router-dom";
import { Resume } from "../pages/Resume";
import App from "../App";
import { Portfolio } from "../pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Portfolio />,
      },
      { path: "/resume", element: <Resume /> },
    ],
  },
]);
