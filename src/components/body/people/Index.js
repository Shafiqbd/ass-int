import { Divider } from "@mui/material";
import ToltipItem from "../../ToltipItem";
const People = ({ peopleData }) => {
  return (
    <div>
      <div className="divide-wrap">
        <p className="color">People</p> &nbsp;
        <Divider className="hr" />
      </div>
      <div className="people-area">
        <div className="title">
          <p>Assignee:</p>
          <p style={{ marginTop: "25px" }}>Reporter:</p>
          <p>Browse Group:</p>
          <p>Watches:</p>
        </div>
        <div className="item">
          <ToltipItem name={peopleData.reporter} />
          <p>{peopleData.reporter}</p>
          <p>{peopleData.group}</p>
          <p>{peopleData.watch}</p>
        </div>
      </div>
      <div className="divide-wrap">
        <p className="color">Dates</p> &nbsp;
        <Divider className="hr" />
      </div>
      <div className="people-area">
        <div className="title">
          <p>Created:</p>
          <p>Updated:</p>
        </div>
        <div className="item date">
          <p>05/04/2020 2:20PM</p>
          <p>02/04/2020 3:20PM</p>
        </div>
      </div>
    </div>
  );
};

export default People;
