import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { FixedSizeList } from "react-window";

function renderRow(props) {
  const { index, style } = props;

  return (
    <div className="list-wrapper">
      <ListItem style={style} key={index} component="div" disablePadding>
        <LocalAtmIcon className="icon" /> &nbsp;
        <ListItemButton style={{ display: "block" }}>
          <ListItemText primary={`${index + 1}9bsdfse321deb4d-3b7d${index + 1}`} />
        </ListItemButton>
      </ListItem>
    </div>
  );
}

export default function OrderBy() {
  return (
    <Box sx={{ width: "100%", height: "100vh", bgcolor: "background.paper" }}>
      <FixedSizeList height={550} width="auto" itemSize={46} itemCount={200} overscanCount={5}>
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
