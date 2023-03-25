import { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import classes from "./Undefined.module.css";

const Undefined = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <div className={classes.mainUndefined}>
        <h1 className={classes.notFound}>Page Not Found</h1>
        <img
          className={classes.notImage}
          src="/SVG/NotFound.svg"
          alt="Not Found"
        ></img>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Undefined;
