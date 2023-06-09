import classes from "./NavBar.module.css";
import NavigationLink from "./NavigationLink/NavigationLink";
import { useRef } from "react";

const NavBar = () => {
  const webLinksRef = useRef();
  const navButtonHandler = () => {
    if (webLinksRef.current.className.includes("navVisible")) {
      webLinksRef.current.className = classes.navInVisible;
    } else {
      webLinksRef.current.className = classes.navVisible;
    }
  };

  return (
    <section className={classes.mainBar}>
      <div className={classes.Bar}>
        <nav className="d-flex flex-fill">
          <a href="/" className={classes.logoLink}>
            <img
              className={classes.NavLogo}
              src="/Images/TechLumos.png"
              alt="Logo"
            ></img>
          </a>
          <div className={classes.navInVisible} ref={webLinksRef}>
            <NavigationLink
              innerText="About Us"
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
            </div>
          </div>
          <img
            className={classes.navButton}
            onClick={navButtonHandler}
            src="/SVG/Menu.svg"
            alt="Icon"
          ></img>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
