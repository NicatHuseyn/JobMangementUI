import styles from "./index.module.scss";

import { endpoints } from "../../../Services/httpClientServer";
import TableComponent from "../../../Components/TableComponent";

const Industry = () => {
  return (
    <section>
      <div className={styles["inner"]}>
        <h1>Industry List Page</h1>
      </div>

      <div className={styles["list"]}>
        <TableComponent endpoint={endpoints.industries} />
      </div>
    </section>
  );
};

export default Industry;
