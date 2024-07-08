import styles from "../HomePage/index.module.scss";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { endpoints, getAllData } from "../../Services/httpClientServer";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [fiveCategory, setFiveCategory] = useState([]);

  useEffect(() => {
    getAllData(endpoints.categories).then((res) => {
      setCategories(res.data);

      const firstFiveData = res.data.slice(0, 5);
      setFiveCategory(firstFiveData);

      console.log(categories);
    });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className={styles["main-inner"]}>
            <div className={styles["main-text"]}>
              <h1>Million Offers Waiting for You !</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </p>
            </div>

            <div className={styles["main-form"]}>
              <form>
                <input
                  className={styles["input"]}
                  type="text"
                  name=""
                  placeholder="Job Title or Keywords"
                />

                <select className={styles["input"]} name="" id="">
                  <option value="">Select Category</option>
                  <option value="">Salam</option>
                  <option value="">Sagol</option>
                </select>

                <input
                  className={styles["input"]}
                  type="text"
                  placeholder="Location"
                />

                <div>
                  <button>
                    <IoSearch /> 
                    Find Jobs
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* section for categories */}

      <section className={styles["category-section"]}>
        <div className="container">
          <div className={styles["category-inner"]}>
            <div className={styles["head"]}>
              <h3>Browse Jobs by Category</h3>
              <span>
                <NavLink>Browser Category Full List</NavLink>
                <FaArrowRightLong
                  style={{ color: "#185DDC", fontSize: "16px" }}
                />
              </span>
            </div>

            <div className={styles["categories"]}>
              {fiveCategory.map((c) => {
                console.log(c.description);
                return (
                  <div className={styles["category-box"]}>
                    <NavLink>
                      <h4>{c.name}</h4>
                      <p>{c.description}</p>
                    </NavLink>

                    <button>Salam</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Code for */}
    </>
  );
};

export default HomePage;
