import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { Chip, Divider } from "@mui/material";
import "../../../styles/home.css";
const Details = ({ details }) => {
  return (
    <div>
      <div className="divide-wrap">
        <p className="color">Details</p> &nbsp;
        <Divider className="hr" />
      </div>
      <div>
        <div className="type-wrapper">
          <div className="type-area">
            <p>Type:</p>
          </div>

          <div className="type-area">
            <p style={{ display: "flex", alignItems: "center" }}>
              <LocalAtmIcon /> &nbsp; {details.type}
            </p>
          </div>
        </div>
        <div className="type-wrapper">
          <div className="type-area">
            <p>Status:</p>
          </div>

          <div className="type-area">
            <p style={{ display: "flex", alignItems: "center" }}>
              <Chip label={details.status} color={details.color} />
            </p>
          </div>
        </div>

        <div className="type-wrapper">
          <div className="type-area">
            <p>Priority:</p>
          </div>

          <div className="type-area">
            <p style={{ display: "flex", alignItems: "center", marginRight: "40px" }}>
              <ArrowDownwardIcon color="success" /> &nbsp; {details.priority}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
