import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import "../../../styles/home.css";
import Submenu from "./Submenu";
import TableView from "./TableView";

const TypeInfo = () => {
  return (
    <div>
      {" "}
      <div className="type-wrapper">
        <Grid container spacing={4}>
          <Grid item md={4}>
            <div className="type-area">
              <p>Type:</p>
            </div>
          </Grid>
          <Grid item md={8} style={{ paddingLeft: "0" }} className="type-area">
            <p style={{ display: "flex", alignItems: "center" }}>
              <LocalAtmIcon /> &nbsp; Terminal ATM
            </p>
          </Grid>
          <Grid item md={4} style={{ paddingTop: "10px" }}>
            <div className="type-area">
              <p>Status:</p>
            </div>
          </Grid>
          <Grid item md={8} style={{ paddingLeft: "0", paddingTop: "10px" }}>
            <div className="type-area">
              <Chip label="Closed" color="success" />
            </div>
          </Grid>

          <Grid item md={4} style={{ paddingTop: "10px" }}>
            <div className="type-area">
              <p>Priority:</p>
            </div>
          </Grid>
          <Grid item md={8} style={{ paddingLeft: "0", paddingTop: "10px" }}>
            <div className="type-area">
              <p style={{ display: "flex", alignItems: "center", marginRight: "40px" }}>
                <ArrowDownwardIcon color="success" /> &nbsp; Regular
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container className="submenu-area">
        <Grid item md={4} style={{ paddingTop: "10px" }}>
          <div className="type-area">
            <p>Sub Menu:</p>
          </div>
        </Grid>
        <Grid item md={8} style={{ paddingLeft: "0", paddingTop: "10px", marginLeft: "-10px" }}>
          <Submenu />
        </Grid>
      </Grid>
      <TableView />
    </div>
  );
};

export default TypeInfo;
