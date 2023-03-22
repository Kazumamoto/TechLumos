import { NavLink } from "react-router-dom";
import classes from "./NavigationLink.module.css";

const NavigationLink = (props) => {
  return (
    <NavLink className={classes.Link} to={props.toLink}>
      {props.innerText}
    </NavLink>
  );
};

export default NavigationLink;
