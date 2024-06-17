import TableComponent from "../../Components/TableComponent";
import { endpoints } from "../../Services/httpClientServer";
import styles from "./index.module.scss";

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
