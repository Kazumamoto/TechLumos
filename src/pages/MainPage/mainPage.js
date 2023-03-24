import classes from "./MainPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import FormComp from "../../components/Form/Form";

const MainPage = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <img
        className={classes.circleSVG}
        src="/SVG/Circle.svg"
        alt="Circle"
      ></img>
      <img
        className={classes.rectSVG}
        src="/SVG/Rectangle.svg"
        alt="Rect"
      ></img>
      <img className={classes.lineSVG} src="/SVG/Line.svg" alt="Line"></img>
      <section className={classes.mainPage}>
        <div className={classes.welLine}>Welcome to TechLumos</div>
        <div className={classes.tagLine}>
          <div>Crafting Solutions for a</div>
          <div>Better Digital World</div>
        </div>
        <div className={classes.visionLine}>
          We help business grow by designing customized web experiences.
        </div>
        <button className={classes.talkBut}>Let's Talk</button>
      </section>
      <FormComp></FormComp>
      <Footer></Footer>
    </Fragment>
  );
};

export default MainPage;
