import styles from "./index.module.scss";

import { endpoints } from "../../../Services/httpClientServer";
import TableComponent from "../../../Components/TableComponent";

const CategoryList = () => {
  return (
    <section>
      <div className={styles["inner"]}>
        <h1>Category List Page</h1>
      </div>

      <div className={styles["list"]}>
        <TableComponent endpoint={endpoints.categories} />
      </div>
    </section>
  );
};

export default CategoryList;
