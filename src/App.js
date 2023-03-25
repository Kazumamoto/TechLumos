import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../src/pages/MainPage/MainPage";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team/Team";
import Services from "./pages/Services/Services";
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
      {
        path: "test",
        element: <h1>Test</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
