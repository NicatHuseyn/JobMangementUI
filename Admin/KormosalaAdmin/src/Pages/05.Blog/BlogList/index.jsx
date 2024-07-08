import styles from "./index.module.scss";

import { endpoints } from "../../../Services/httpClientServer";
import TableComponent from "../../../Components/TableComponent";

const BlogList = () => {
  return (
    <section>
      <div className={styles["inner"]}>
        <h1>Blog List Page</h1>
      </div>

      <div className={styles["list"]}>
        <TableComponent endpoint={endpoints.blogs} />
      </div>
    </section>
  );
};

export default BlogList;
