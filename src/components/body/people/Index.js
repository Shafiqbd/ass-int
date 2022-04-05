import { Divider } from "@mui/material";
import ToltipItem from "../../ToltipItem";
const People = () => {
  return (
    <div>
      <div className="divide-wrap">
        <p className="color">People</p> &nbsp;
        <Divider className="hr" />
      </div>
      <div className="people-area">
        <div className="title">
          <p>Assignee:</p>
          <p>Reporter:</p>
          <p>Browse Group:</p>
          <p>Watches:</p>
        </div>
        <div className="item">
          <ToltipItem />
          <p>Shafiq</p>
          <p>Website</p>
          <p>TV News</p>
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
