import { NavLink, useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { endpoints, getDataById } from "../../Services/httpClientServer";
import toast from "react-hot-toast";

const JobDetail = () => {
  const { id } = useParams();

  const [job, setJob] = useState({});
  const [company, setCompany] = useState({});

  useEffect(() => {
    getDataById(endpoints.jobs, id)
      .then((res) => {
        setJob(res.data.data);
      })
      .catch((err) => {
        toast.error(err);
        setJob({});
      });
  }, []);

  useEffect(() => {
    getDataById(endpoints.companies, job.companyId)
      .then((res) => {
        setCompany(res.data.data);
      })
      .catch((err) => {
        toast.error(err);
        setCompany({});
      });
  }, []);

  return (
    <section className={styles["job-detail"]}>
      <div className="container">
        <div className={styles["detail-inner"]}>
          <div className={styles["job-title"]}>
            <h1>{job.name}</h1>

            <div className={styles["job-date"]}>
              <span>20-04-05</span>
            </div>

            <div className={styles["job-company"]}>
              <h3>
                <NavLink>{company.name}</NavLink>
              </h3>
            </div>
          </div>

          <div className={styles["job-requirements"]}>
            <h5>Requirements:</h5>

            <div className={styles["job-description"]}>
              <p>{job.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetail;
