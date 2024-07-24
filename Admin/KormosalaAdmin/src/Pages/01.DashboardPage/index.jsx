import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import { endpoints, getAllData } from "../../Services/httpClientServer";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getAllData(endpoints.jobs)
      .then((res) => {
        if (res.data.length > 0) {
          setDatas(res.data);
        } else {
          setDatas([]);
        }
      })
      .catch((err) => {
        setDatas([]);
        toast.error(err);
      });
  }, []);

  return (
    <section>
      <div className="container">
        <div className={styles["dashboard-inner"]}>
          <div className={styles["header"]}>
            <form>
              <input type="search" name="" id="" placeholder="Search Job" />
            </form>
          </div>

          <div className={styles["jobs"]}>
            {datas.map((d) => {
              console.log(d);
              return (
                <div className={styles["job-layout"]} key={d.id}>
                  <div className={styles["layout-inner"]}>
                    <div className={styles["job-name"]}>
                      <h3>
                        <NavLink to={`${endpoints.jobs}/${d.id}`}>
                          {d.name}
                        </NavLink>
                      </h3>
                    </div>

                    <div className={styles["job-create"]}>
                      <p>2024-03-04</p>
                    </div>

                    <div className={styles["job-company"]}>
                      <h3>Company Name</h3>
                    </div>
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

export default Dashboard;
