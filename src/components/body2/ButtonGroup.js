import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import * as React from "react";
import "../../styles/home.css";
import Dropdown from "../Dropdown";
const buttons = [
  <Button key="one">Watch Issue</Button>,
  <Button key="two">
    <div className="export">
      <Dropdown name={"More"} />
    </div>
  </Button>,
];

export default function ButtonGroups() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <div className="btn-group">
        <Button className="btn" variant="outlined">
          <ChatBubbleOutlineIcon /> Comment
        </Button>
        <ButtonGroup className="top-btn" size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
        {/* <Button className="btn" variant="outlined">
          <Dropdown className="btn" name={"Admin"} />
        </Button> */}
      </div>
    </Box>
  );
}
