import { Divider } from "@mui/material";
import "../../../styles/home.css";
import TabsItem from "./TabsItem";
import TypeInfo from "./TypeInfo";
const Details = () => {
  return (
    <div>
      <div className="divide-wrap">
        <p className="color">Details</p> &nbsp;
        <Divider className="hr" />
      </div>
      <TypeInfo />
      <div className="divide-wrap">
        <p className="color">Activity</p>
        <Divider className="hr" />
      </div>
      <div className="tab-area">
        <TabsItem />
      </div>
    </div>
  );
};

export default Details;
