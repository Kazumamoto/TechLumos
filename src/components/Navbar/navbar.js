import classes from "./NavBar.module.css";
import NavigationLink from "./NavigationLink/NavigationLink";
import { useRef } from "react";

const NavBar = () => {
  const webLinksRef = useRef();
  const navButtonHandler = () => {
    if (webLinksRef.current.className.includes("navVisible")) {
      console.log(webLinksRef.current.style);
      webLinksRef.current.className = classes.navInVisible;
    } else {
      console.log(webLinksRef.current.style);
      webLinksRef.current.className = classes.navVisible;
    }
  };

  return (
    <div className={classes.Bar}>
      <nav className="d-flex flex-fill">
        <a href="/" className={classes.logoLink}>
          <img
            className={classes.NavLogo}
            src="/Images/TechLumos.png"
            alt="Logo"
          ></img>
        </a>
        <div className={classes.webLinks} ref={webLinksRef}>
          <NavigationLink
            innerText="Meet the Team"
            toLink="/team"
          ></NavigationLink>
          <NavigationLink
            innerText="Our Services"
            toLink="/services"
          ></NavigationLink>
          <NavigationLink
            innerText="Contact"
            toLink="/contact"
          ></NavigationLink>
        </div>
        <div className={classes.socialLinks}>
          <a href="/" className={classes.socialLink}>
            <img src="/Icons/Instagram.svg" alt="Instagram"></img>
          </a>
          <a href="/" className={classes.socialLink}>
            <img src="/Icons/Facebook.svg" alt="Facebook"></img>
          </a>
          <a href="/" className={classes.socialLink}>
            <img src="/Icons/Twitter.svg" alt="Twitter"></img>
          </a>
          <button className={classes.navButton} onClick={navButtonHandler}>
            NavBar
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
