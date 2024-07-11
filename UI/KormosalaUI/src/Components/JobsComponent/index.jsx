import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { useEffect } from "react";
import { endpoints, getAllData } from "../../Services/httpClientServer";

const JobsComponent = () => {
  const [jobs, setJobs] = useState([]);

  const [firstFourJobs, setFirstFourJobs] = useState([]);

  useEffect(() => {
    getAllData(`${endpoints.jobs}/${endpoints.getjobcategoryandcompany}`).then(
      (res) => {
        setJobs(res.data);

        const firtsJobs = res.data.slice(0, 4);
        setFirstFourJobs(firtsJobs);
      }
    );
  }, []);

  return (
    <section className={styles["jobs"]}>
      <div className="container">
        <div className={styles["job-inner"]}>
          <div className={styles["title"]}>
            <h3>Featured Jobs Post of This Week</h3>
          </div>

          <div className={styles["job-boxes"]}>
            {firstFourJobs.map((j) => {
              console.log(j.salary);

              return (
                <div className={styles["job-box"]}>
                  <div className={styles["company-logo"]}>
                    <img src={j.company.icon} alt="logo not found" />
                  </div>

                  <div className={styles["job-detail"]}>
                    <h4>{j.jobType}</h4>
                    <h1>
                      <NavLink to={`${endpoints.jobs}/${j.id}`}>{j.name}</NavLink>
                    </h1>
                    <p className={styles["posted"]}>Posted 1 years ago</p>

                    <div className={styles["detail"]}>
                      <p>
                        Location: <span>Baki Seheri</span>
                      </p>
                      <p>
                        Category: <span>{j.category.name}</span>
                      </p>
                      <p>
                        Salary: <span>{j.salary} $ </span>
                      </p>
                    </div>
                  </div>

                  <div className={styles["wish"]}>
                    <span>
                      <CiHeart className={styles["heart"]} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsComponent;
