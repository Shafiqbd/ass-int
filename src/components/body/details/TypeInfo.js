import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import Submenu from "./Submenu";
import TableView from "./TableView";

const TypeInfo = () => {
  return (
    <div>
      {" "}
      <div className="type-wrapper">
        <Grid container spacing={8}>
          <Grid item md={6}>
            <div className="type-area">
              <p>Type:</p>
              <p style={{ display: "flex", alignItems: "center" }}>
                <LocalAtmIcon /> &nbsp; Terminal ATM
              </p>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="type-area">
              <p>Status:</p>
              <Chip label="Closed" color="success" />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="type-area">
              <p>Priority:</p>
              <p style={{ display: "flex", alignItems: "center", marginRight: "40px" }}>
                <ArrowDownwardIcon color="success" /> &nbsp; Regular
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container className="submenu-area">
        <Grid item md={3}>
          <div className="type-area">
            <p>Sub Menu:</p>
          </div>
        </Grid>
        <Grid item md={9}>
          <Submenu />
        </Grid>
      </Grid>
      <TableView />
    </div>
  );
};

export default TypeInfo;
