import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import SideMenu from "../../Layouts/SideMenu";

const AdminLayout = () => {
  return (
    <>
      <main>
        <div className={styles["admin-menu"]}>
          <div className="menu-inner">
            <SideMenu />
          </div>
        </div>

        <div className={styles["admin-main"]}>
          <div className={styles["main-inner"]}>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
