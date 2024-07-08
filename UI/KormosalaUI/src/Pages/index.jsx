import Header from "../Layouts/Header";
import { Outlet } from "react-router-dom";

const UILayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default UILayout;
