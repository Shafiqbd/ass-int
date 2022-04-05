import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Dropdown from "../Dropdown";
import Search from "../Search";
const Topbar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="btn-area">
        <Avatar className="avarter" alt="Remy Sharp" src="{img}" />
        <Dropdown name={"Dashboard"} />
        <Dropdown name={"Projects"} />
        <Dropdown name={"Issues"} />
        <Button className="single-btn">Agile</Button>
        <Dropdown name={"Service Desk"} />
        <Button className="red-btn">Create</Button>
      </div>
      <div className="search-area">
        <Search />
        <Dropdown icon={<SettingsIcon />} />
        <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" />
      </div>
    </div>
  );
};

export default Topbar;
