import classes from "./MainPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { Fragment } from "react";

const MainPage = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <h1>Main Page</h1>
    </Fragment>
  );
};

export default MainPage;
