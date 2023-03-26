import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={classes.aboutUs}>
      <h1 className={classes.aboutUsHeading}>About Us</h1>
      <p className={classes.aboutUsContent}>
        TechLumos is an IT services agency established in 2022 specializing in
        UI/UX design and web development. Our team is made up of experienced
        professionals who are dedicated to delivering innovative and effective
        solutions that help businesses succeed in today's digital landscape.
        <br />
        At TechLumos, we believe that every business has unique needs and goals.
        That's why we work closely with our clients to understand their
        business, their customers, and their vision. By collaborating closely
        with our clients, we are able to develop custom solutions that are
        tailored to their specific needs and deliver results.
      </p>
    </section>
  );
};

export default AboutUs;
