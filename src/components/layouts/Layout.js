import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import OrderBy from "../../components/OrderBy";
import "../../styles/home.css";
import MainLaout from "../layouts/MainLayout";
const Layout = (props) => {
  return (
    <>
      <MainLaout>
        <Grid container className="body-wrapper">
          <Grid item md={3}>
            <OrderBy />
          </Grid>
          <Grid item md={9}>
            <div className="body-wrapper">
              <Outlet />
            </div>
          </Grid>
        </Grid>
      </MainLaout>
    </>
  );
};

export default Layout;
