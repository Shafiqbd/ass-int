import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import List from "./List";
const Sidebar = () => {
  let filters = ["My Open Issues", "Reported by Me", "Recently Viewed", "All Issues"];
  let favFilters = [
    "Issues updated last week and",
    "Issues updated last week and",
    "Works in progress all depertment",
    "Works in progress all depertment",
    "Works in progress all depertment",
    "Works in progress all depertment",
    "Works in progress all depertment",
    "All Issues",
    "Recently views",
  ];
  return (
    <div className="sidebar-area">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p>FILTERS</p>
        <KeyboardDoubleArrowLeft style={{ color: "gray" }} />
      </div>
      <Button className="filter-btn" variant="outlined">
        New Filter
      </Button>
      <p>Find Filters</p>
      <Divider className="divider" sx={{ my: 0.5 }} />
      <List filters={filters} />
      <Divider className="divider" sx={{ my: 0.5 }} />
      <p>FAVORITE FILTERS</p>
      <List filters={favFilters} />
    </div>
  );
};

export default Sidebar;
