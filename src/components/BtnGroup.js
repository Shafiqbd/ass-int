import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import * as React from "react";
import Dropdown from "../components/Dropdown";
const buttons = [
  <Button key="one">
    {" "}
    <ScreenShareIcon />
  </Button>,
  <Button key="two">
    <div className="export export-area">
      <SystemUpdateAltIcon /> &nbsp;
      <Dropdown name={"Export"} />
    </div>
  </Button>,
];

export default function BtnGroup() {
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
        <ButtonGroup size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </div>
    </Box>
  );
}
