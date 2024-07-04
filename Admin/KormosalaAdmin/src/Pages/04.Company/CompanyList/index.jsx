import styles from "./index.module.scss";

import { endpoints } from "../../../Services/httpClientServer";
import TableComponent from "../../../Components/TableComponent";

const CompanyList = () => {
  return (
    <section>
      <div className={styles["inner"]}>
        <h1>Company List Page</h1>
      </div>

      <div className={styles["list"]}>
        <TableComponent endpoint={endpoints.companies} />
      </div>
    </section>
  );
};

export default CompanyList;
