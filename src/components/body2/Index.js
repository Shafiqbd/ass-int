import { Grid } from "@mui/material";
import BtnGroup from "../BtnGroup";
import ButtonGroup from "./ButtonGroup";
import Details from "./details/Index";
import People from "./people/Index";
import Profile from "./Profile";
const Body = (props) => {
  return (
    <div>
      <Profile name={props.name} designation={props.designation} address={props.address} />
      <div className="btn-wrap">
        <ButtonGroup />
        <BtnGroup />
      </div>
      <Grid container spacing={4}>
        <Grid item md={8}>
          <Details />
        </Grid>
        <Grid item md={4}>
          <People />
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
