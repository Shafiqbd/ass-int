import { Outlet } from "react-router-dom";
import "../../styles/home.css";
import MainLaout from "../layouts/MainLayout";
const Layout = (props) => {
  return (
    <>
      <MainLaout>
        <Outlet />
      </MainLaout>
    </>
  );
};

export default Layout;
