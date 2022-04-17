import { Divider, Grid } from "@mui/material";
import { Outlet } from "react-router";
import { useParams } from "react-router-dom";
import ButtonGroup from "../components/body/ButtonGroup";
import Details from "../components/body/details/Index";
import Submenu from "../components/body/details/Submenu";
import TableView from "../components/body/details/TableView";
import TabsItem from "../components/body/details/TabsItem";
import People from "../components/body/people/Index";
import Profile from "../components/body/Profile";
import BtnGroup from "../components/BtnGroup";
import OrderBy from "../components/OrderBy";
import "../styles/home.css";
const Starred = () => {
  const { id } = useParams();
  const details = {
    type: "ATM",
    status: "Open",
    color: "success",
    priority: "High",
  };
  const TableData = {
    id: 82828,
    name: "Md. Mahfuz Ahmed",
    address: "Dhaka",
    designation: "Software Engineer",
  };
  const peopleData = {
    assignee: "Mahfuz",
    reporter: "Mahfuz",
    group: "Dhaka",
    watch: "Papper",
  };

  const profileData = {
    name: "Mahfuz Ahmed",
    designation: "Software Engineer",
    address: "Dhaka",
  };

  const TabList = ["All", "Comments", "Work Log", "History", "Activity"];

  return (
    <Grid container className="body-wrapper">
      <Grid item md={3}>
        <OrderBy name={"starred"} />
      </Grid>
      <Grid item md={9}>
        {id ? (
          <Outlet />
        ) : (
          <div className="body-wrapper">
            <Profile profileData={profileData} />
            <div className="btn-wrap">
              <ButtonGroup />
              <BtnGroup />
            </div>
            <Grid container spacing={4}>
              <Grid item md={7}>
                <Details details={details} />
                <div className="submenu-area">
                  <div className="type-area">
                    <p>Sub Menu:</p>
                  </div>

                  <Submenu />
                </div>
                <TableView TableData={TableData} />
              </Grid>
              <Grid item md={5}>
                <People peopleData={peopleData} />
              </Grid>
            </Grid>
            <div className="divide-wrap">
              <p className="color">Activity</p> &nbsp;
              <Divider className="hr" />
            </div>
            <div className="tab-area">
              <TabsItem TabList={TabList} />
            </div>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default Starred;
