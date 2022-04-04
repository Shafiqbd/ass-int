import { Divider, Grid } from "@mui/material";
import "../../styles/home.css";
import Sidebar from "../Sidebar";
import Header from "./Header";
const Layout = (props) => {
  return (
    <>
      <Header />
      <Divider className="divider" sx={{ my: 0.5 }} />
      <Grid container>
        <Grid item md={1.5}>
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
        </Grid>
        <Grid item md={10.5}>
          {props.children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
