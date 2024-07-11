import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import { Outlet } from "react-router-dom";

const UILayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default UILayout;
