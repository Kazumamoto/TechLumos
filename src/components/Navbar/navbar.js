import classes from "./NavBar.module.css";
import NavigationLink from "./NavigationLink/NavigationLink";

const NavBar = () => {
  return (
    <div className={classes.Bar}>
      <nav>
        <a class="navbar-brand" href="/">
          <img
            className={classes.NavLogo}
            src="/Images/TechLumos.png"
            alt="Logo"
          ></img>
        </a>
        <NavigationLink
          innerText="Meet the Team"
          toLink="/team"
        ></NavigationLink>
        <NavigationLink
          innerText="Our Services"
          toLink="/services"
        ></NavigationLink>
        <NavigationLink innerText="Contact" toLink="/contact"></NavigationLink>
        <span className={classes.socialLinks}>
          <a href="/" className={classes.socialLink}>
            <img src="/Icons/Instagram.svg" alt="Instagram"></img>
          </a>
          <a href="/" className={classes.socialLink}>
            <img src="/Icons/Facebook.svg" alt="Facebook"></img>
          </a>
          <a href="/" className={classes.socialLink}>
            <img src="/Icons/Twitter.svg" alt="Twitter"></img>
          </a>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
