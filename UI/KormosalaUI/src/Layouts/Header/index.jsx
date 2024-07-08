import styles from "../Header/index.module.scss";
import { NavLink } from "react-router-dom";
import { MdWorkOutline } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className={styles["header-inner"]}>
          <div className={styles["responsive-menu"]}>
            <div className={styles["menu"]}>
              <button onClick={toggleMenu} className={styles["menu-btn"]}>
                {isMenuOpen ? (
                  <FaTimes
                    style={{ color: "white" }}
                    className={styles["bar-icon"]}
                  />
                ) : (
                  <FaBars
                    style={{ color: "white" }}
                    className={styles["bar-icon"]}
                  />
                )}
              </button>
            </div>

            <div
              className={`${styles["side-menu"]} ${
                isMenuOpen ? styles["show"] : ""
              }`}
            >
              <nav className={styles["menu-items"]}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/blog">Blogs</NavLink>
                <NavLink to="/pages">Pages</NavLink>
              </nav>
            </div>
          </div>

          <div className={styles["logo"]}>
            <NavLink>
              <img
                src="https://apusthemes.com/wp-demo/kormosala/wp-content/uploads/2019/08/logo_white.png"
                alt="logo"
              />
            </NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/jobs">Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/employers">Employers</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>Pages</li>
            </ul>
          </nav>

          <div className={styles["post"]}>
            <NavLink to="/create-job">
              <span>
                <MdWorkOutline />
                Post a Job
              </span>
            </NavLink>
          </div>

          <div className={styles["register"]}>
            <NavLink>Login</NavLink>
            <NavLink>Register</NavLink>
          </div>

          <div className={styles["responsive-register"]}>
            <NavLink>
              <FaUser className={styles["user-icon"]} />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
