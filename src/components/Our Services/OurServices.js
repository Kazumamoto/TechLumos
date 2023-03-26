import { Fragment } from "react";
import classes from "./OurServices.module.css";

const OurServices = () => {
  return (
    <Fragment>
      <section className={classes.mainOurServices}>
        <h1 className={classes.servicesHeading}>Our Services</h1>
        <div className={classes.servicesBox}>
          <div className={classes.designBox}>
            <img alt="UI/UX" src="/SVG/UI.svg"></img>
            <div className={classes.serviceTitle}>UI/UX Design</div>
            <div className={classes.serviceDetail}>
              Our UI/UX design team is passionate about creating exceptional
              user experiences that engage and delight customers. That's why we
              take a user-centric approach to design, ensuring that every
              element of our designs is optimized for maximum impact.
            </div>
            <button className={classes.readMore}>Read More</button>
          </div>
          <div className={classes.webBox}>
            <img alt="Web" src="/SVG/Web.svg"></img>
            <div className={classes.serviceTitle}>Web Development</div>
            <div className={classes.serviceDetail}>
              Our web development team is skilled in creating robust and
              scalable websites that are optimized for performance and search
              engine visibility. Whether you need, we have the expertise to
              deliver a solution that meets your needs and exceeds your
              expectations.
            </div>
            <button className={classes.readMore}>Read More</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurServices;
