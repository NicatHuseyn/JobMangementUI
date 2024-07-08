import styles from "./index.module.scss";

import { endpoints } from "../../../Services/httpClientServer";
import TableComponent from "../../../Components/TableComponent";

const JobList = () => {
  return (
    <section>
      <div className={styles["inner"]}>
        <h1>Job List Page</h1>
      </div>

      <div className={styles["list"]}>
        <TableComponent endpoint={endpoints.jobs} />
      </div>
    </section>
  );
};

export default JobList;
