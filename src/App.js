import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team/Team";
import Services from "./pages/Services/Services";
import "./App.css";
import Undefined from "./pages/Undefined/Undefined";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <MainPage></MainPage>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "team",
        element: <Team></Team>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "*",
        element: <Undefined></Undefined>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
