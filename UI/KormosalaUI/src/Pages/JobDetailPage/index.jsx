import styles from "./index.module.scss";

const JobDetail = () => {
  return (
    <section>
      <div className="container">
        <div className={styles["inner"]}>
          <div className={styles["job-detail"]}>
            <h3>About The Job</h3>
          </div>

          <div className={styles["company-detail"]}></div>
        </div>
      </div>
    </section>
  );
};

export default JobDetail;
