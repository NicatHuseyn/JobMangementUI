import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

import { Menu } from "antd";
import { MdDashboard } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdOutlineCategory } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { TbLogs } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";

const SideMenu = () => {
  // ? Side Menu Item
  const items = [
    {
      key: "sub1",
      label: "Dashboard",
      icon: <MdDashboard />,
      children: [
        {
          key: "1",
          label: <NavLink to="/">Dashboard Page</NavLink>,
        },
      ],
    },
    {
      key: "sub2",
      label: "Industry",
      icon: <LiaIndustrySolid />,
      children: [
        {
          key: "2",
          label: <NavLink to="/industry">Industry Page</NavLink>,
        },
        {
          key: "3",
          label: <NavLink to="/create-industry">Create Industry</NavLink>,
        },
        // {
        //   key: "sub3",
        //   label: "Submenu",
        //   children: [
        //     {
        //       key: "4",
        //       label: "Option 4",
        //     },
        //     {
        //       key: "5",
        //       label: "Option 5",
        //     },
        //   ],
        // },
      ],
    },
    {
      key: "sub4",
      label: "Category",
      icon: <MdOutlineCategory />,
      children: [
        {
          key: "4",
          label: <NavLink to="/category">Category Page</NavLink>,
        },
        {
          key: "5",
          label: <NavLink to="/create-category">Create Category</NavLink>,
        },
      ],
    },
    {
      key: "sub5",
      label: "Company",
      icon: <BsBuildings />,
      children: [
        {
          key: "6",
          label: <NavLink to="/company">Company Page</NavLink>,
        },
        {
          key: "7",
          label: <NavLink to="/create-company">Create Company</NavLink>,
        },
      ],
    },
    {
      key: "sub6",
      label: "Blogs",
      icon: <TbLogs />,
      children: [
        {
          key: "8",
          label: <NavLink to="/blog">Blog Page</NavLink>,
        },
        {
          key: "9",
          label: <NavLink to="/create-blog">Create Blog</NavLink>,
        },
      ],
    },
    {
      key: "sub7",
      label: "Job",
      icon: <MdWorkOutline />,
      children: [
        {
          key: "10",
          label: <NavLink to="/job">Job Page</NavLink>,
        },
        {
          key: "11",
          label: <NavLink to="/create-job">Create Job</NavLink>,
        },
      ],
    },
  ];
  // ? Side Menu Item

  return (
    <>
      <section>
        <div className={styles["menu"]}>
          <Menu
            theme="dark"
            style={{
              width: "100%",
            }}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </div>
      </section>
    </>
  );
};

export default SideMenu;
