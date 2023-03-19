import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/mainPage";
import Contact from "./pages/Contact/contact";
import Team from "./pages/Team/team";
import Services from "./pages/Services/services";
import "./App.css";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
