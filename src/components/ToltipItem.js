import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../styles/home.css";

export default function ToltipItem() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="toltip-wrap">
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <div className="content">
            <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp;
            <div>
              <p>Md. Shafiqul Islam </p>
              <p> Software Eng. </p>
              <p> Dhaka, Bangladesh </p>
            </div>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
