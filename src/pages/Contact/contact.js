import classes from "./Contact.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import FormComp from "../../components/Form/Form";

const Contact = () => {
  return (
    <div>
      <NavBar></NavBar>
      <section className={classes.mainContact}>
        <div className={classes.contactUs}>Contact Us</div>
        <div className={classes.contactPanel}>
          <div className={classes.contactButGroup}>
            <button className={classes.contactBut}>
              <img
                className={classes.contactImg}
                alt="Icon"
                src="/SVG/Contact Page/Message.svg"
              ></img>{" "}
              Send a Message
            </button>
            <button className={classes.contactBut}>
              <img
                className={classes.contactImg}
                alt="Icon"
                src="/SVG/Contact Page/Whatsapp.svg"
              ></img>
              +923364436220
            </button>
            <button className={classes.contactBut}>
              <img
                className={classes.contactImg}
                alt="Icon"
                src="/SVG/Contact Page/Email.svg"
              ></img>
              techlumos@gmail.com
            </button>
          </div>
          <img
            className={classes.handImage}
            src="/Images/Hand.png"
            alt="Contact"
          ></img>
        </div>
      </section>
      <FormComp></FormComp>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
