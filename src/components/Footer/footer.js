import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.copyright}>
        Copyright TechLumos 2023. All rights reserved
      </div>
      <div className={classes.WebLinks}>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <a className={classes.webLink} href="/services">
              Our Services
            </a>
            <a className={classes.webLink} href="/">
              Privacy Policy
            </a>
          </div>
          <div className="d-flex">
            <a className={classes.webLink} href="/contact">
              Contact Us
            </a>
            <a className={classes.webLink} href="/">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.socialLinks}>
          <a href="/" className={classes.socialLink}>
            <img src="/Icons/Instagram Black.svg" alt="Instagram"></img>
          </a>
          <a href="/" className={classes.socialLink}>
            <img src="/Icons/Facebook Black.svg" alt="Facebook"></img>
          </a>
          <a href="/" className={classes.socialLink}>
            <img src="/Icons/Twitter Black.svg" alt="Twitter"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
