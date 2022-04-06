import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import { Button } from "@mui/material";
import Dropdown from "../Dropdown";
import Select from "../Select";
const Headingbar = () => {
  return (
    <div>
      <div className="heading-area-top">
        <div className="left-area">
          <p className="name">Md. Shafiqul Islam</p>
          <Button className="filter-btn" variant="outlined">
            Save as
          </Button>
          <Button className="btn" variant="text">
            Details
          </Button>
          <StarIcon className="star" />
        </div>
        <div className="right-area">
          <Button className="share-btn btn gap" variant="text">
            <ScreenShareIcon /> &nbsp; Share
          </Button>
          <div className="export gap">
            <SystemUpdateAltIcon />
            <Dropdown name={"Export"} />
          </div>
          <div className="export gap">
            <SettingsIcon />
            <Dropdown name={"Tools"} />
          </div>
        </div>
      </div>
      <div className="heading-area-bottom">
        <Select style={{ padding: "3px 16px", fontSize: "13px" }} label={"Project"} />
        <Select label={"Status"} />
        <Select label={"Assignee"} />
        <Select label={"More"} />
        <SearchIcon />
        <Button className="btn" variant="text">
          Advance
        </Button>
      </div>
    </div>
  );
};

export default Headingbar;
