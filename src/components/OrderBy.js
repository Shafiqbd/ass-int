import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={{ color: "gray" }} key={index} component="div" disablePadding>
      <ListItemButton>
        <LocalAtmIcon className="icon" /> &nbsp;
        <ListItemText primary={`${index + 1}9bsdfse321deb4d-3b7d${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList() {
  return (
    <Box sx={{ width: "100%", height: 400, maxWidth: 360, bgcolor: "background.paper" }}>
      <FixedSizeList height={550} width="auto" itemSize={46} itemCount={60} overscanCount={5}>
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
