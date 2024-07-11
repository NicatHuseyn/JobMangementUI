import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles["footer-inner"]}>
          <div className={styles["footer-boxes"]}>
            <div className={styles["box"]}>
              <div className={styles["logo"]}>
                <NavLink to="/">
                  <img
                    src="https://apusthemes.com/wp-demo/kormosala/wp-content/themes/kormosala/images/logo-dark.png"
                    alt="logo not found"
                  />
                </NavLink>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className={styles["connection"]}>
                Email: <span>example@headoffice.com</span>
              </p>
              <p className={styles["connection"]}>
                Phone: <span> +41 123 456 789</span>
              </p>
            </div>
            <div className={styles["box"]}>
              <div className={styles["footer-title"]}>
                <h4>Employer</h4>

                <ul>
                  <li>
                    <NavLink>Browse Candidates</NavLink>
                  </li>
                  <li>
                    <NavLink>Post a Job</NavLink>
                  </li>
                  <li>
                    <NavLink>Employer listing</NavLink>
                  </li>
                  <li>
                    <NavLink>Resume Page</NavLink>
                  </li>
                  <li>
                    <NavLink>DashBoard</NavLink>
                  </li>
                  <li>
                    <NavLink>Job Packages</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles["box"]}>
              <div className={styles["footer-title"]}>
                <h4>Candidate</h4>

                <ul>
                  <li>
                    <NavLink>Browse Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink>Submit Resume</NavLink>
                  </li>
                  <li>
                    <NavLink>DashBoard</NavLink>
                  </li>
                  <li>
                    <NavLink>Browse Categories</NavLink>
                  </li>
                  <li>
                    <NavLink>My Bookmarks</NavLink>
                  </li>
                  <li>
                    <NavLink>Candidate Listing</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles["box"]}>
              <div className={styles["footer-title"]}>
                <h4>Sign Up for Everyday Newsletter</h4>

                <p>
                  Subscribe to kormosala Pacific newsletter to get thelatest
                  jobs posted, candidates, and other latestnews stay update.
                </p>

                <div className={styles["footer-mail"]}>
                  <input
                    placeholder="Email Address"
                    type="email"
                    name=""
                    id="email"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["footer-end"]}>
        <div className="container">
          <div className={styles["end-inner"]}>
            <p>© Copyright 2019 Kormosala – Powerd By ApusTheme</p>

            <ul>
              <li>
                <span>
                  <NavLink>
                    <FaInstagram />
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink>
                    <FaFacebookF />
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink>
                    <FaLinkedinIn />
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink>
                    <FaGithub />
                  </NavLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
