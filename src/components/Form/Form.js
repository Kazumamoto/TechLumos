import classes from "./Form.module.css";
import Input from "../UI/Input";
import { Form } from "react-router-dom";

const FormComp = () => {
  return (
    <section className={classes.formPanel}>
      <div className="col-6">
        <div className={classes.formPanelLines}>
          <div className={classes.formPanelLine01}>Got a Project in Mind?</div>
          <div className={classes.formPanelLine02}>
            Use the Form to tell us about your project. We’ll get back to you as
            soon as we can.
          </div>
        </div>
      </div>
      <div className={classes.formForm}>
        <Form>
          <div className="d-flex">
            <Input
              name="username"
              type="text"
              id="username"
              placeholder="Name"
              label="Your Name"
            ></Input>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              label="Your Email"
            ></Input>
          </div>
          <div className="d-flex flex-column">
            <label for="details">Your Project Details</label>
            <div>
              <textarea
                name="details"
                id="details"
                placeholder="Project Details"
              ></textarea>
            </div>
          </div>
          <div className="d-flex">
            <Input
              name="budget"
              type="number"
              id="budget"
              placeholder="Budget Range ($)"
              label="Your Budget Range"
            ></Input>
            <Input
              name="timeline"
              type="date"
              id="timeline"
              placeholder="Timeline"
              label="Your Timeline"
            ></Input>
          </div>
          <button className={classes.sendMessage}>
            Send Message <img src="/SVG/Message.svg" alt="SVG"></img>{" "}
          </button>
        </Form>
      </div>
    </section>
  );
};

export default FormComp;
