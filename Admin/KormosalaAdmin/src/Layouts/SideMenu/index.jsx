import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

import { Menu } from "antd";
import { MdDashboard } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdOutlineCategory } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { TbLogs } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

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
          label: <NavLink to="/industry-list">Industry List</NavLink>,
        },
        {
          key: "3",
          label: <NavLink to="/create-industry">Create Industry</NavLink>,
        },
        {
          key: "4",
          label: <NavLink to="/update-industry">Update Industry</NavLink>,
        },
      ],
    },
    {
      key: "sub4",
      label: "Category",
      icon: <MdOutlineCategory />,
      children: [
        {
          key: "5",
          label: <NavLink to="/category-list">Category List</NavLink>,
        },
        {
          key: "6",
          label: <NavLink to="/create-category">Create Category</NavLink>,
        },
        {
          key: "7",
          label: <NavLink to="/update-category">Update Category</NavLink>,
        },
      ],
    },
    {
      key: "sub5",
      label: "Company",
      icon: <BsBuildings />,
      children: [
        {
          key: "8",
          label: <NavLink to="/company-list">Company List</NavLink>,
        },
        {
          key: "9",
          label: <NavLink to="/create-company">Create Company</NavLink>,
        },
        {
          key: "10",
          label: <NavLink to="/update-company">Update Company</NavLink>,
        },
      ],
    },
    {
      key: "sub6",
      label: "Blogs",
      icon: <TbLogs />,
      children: [
        {
          key: "11",
          label: <NavLink to="/blog-list">Blog List</NavLink>,
        },
        {
          key: "12",
          label: <NavLink to="/create-blog">Create Blog</NavLink>,
        },
        {
          key: "13",
          label: <NavLink to="/update-blog">Update Blog</NavLink>,
        },
      ],
    },
    {
      key: "sub7",
      label: "Job",
      icon: <MdWorkOutline />,
      children: [
        {
          key: "14",
          label: <NavLink to="/job-list">Job List</NavLink>,
        },
        {
          key: "15",
          label: <NavLink to="/create-job">Create Job</NavLink>,
        },
        {
          key: "16",
          label: <NavLink to="/update-job">Update Job</NavLink>,
        },
      ],
    },
    {
      key: "sub8",
      label: "Address",
      icon: <IoLocationOutline />,
      children: [
        {
          key: "17",
          label: <NavLink to="/create-locations">Address List</NavLink>,
        },
        {
          key: "18",
          label: <NavLink to="/create-job">Create Job</NavLink>,
        },
        {
          key: "19",
          label: <NavLink to="/update-jobs">Update Job</NavLink>,
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
