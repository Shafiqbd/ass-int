import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import * as React from "react";
import styled from "styled-components";

const FormWrap = styled.div`
  & .form-area {
    display: flex !important;
    aligin-items: center;
    padding: 10px 20px;
    & .title {
      width: 80px;
    }
  }
`;

export default function MailFrom() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <FormWrap>
              <Paper>
                <div className="form-area">
                  <div className="title">
                    <p>From: </p>
                    <p>to: </p>
                    <p>date: </p>
                    <p>Subject: </p>
                    <p>Mail by: </p>
                  </div>
                  <div className="info">
                    <p>Shafiqul Islam shafiq523000gmail.com </p>
                    <p> titustar@gmail.com</p>
                    <p>Apr 14, 2022, 12:56 PM</p>
                    <p> Application for waiver of late penalty </p>
                    <p>gmail.com </p>
                  </div>
                </div>
              </Paper>
            </FormWrap>
          </Fade>
        )}
      </Popper>

      <Grid container justifyContent="flex-start">
        <Grid item>
          <Button onClick={handleClick("bottom-start")}>
            <ArrowDropDown />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
