import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
export default function OrderBy({ name }) {
  const navigate = useNavigate();
  const loadDetails = (id) => {
    navigate(`${id}`);
    console.log("e", id);
  };
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 600,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <li key={index}>
          <ul>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
              let id = `${name}-${item + 222}-3b7d${item + 112}`;
              return (
                <NavLink to={`${id}`} className="main-menu">
                  <ListItem className="list" key={item}>
                    <RadioButtonCheckedIcon /> &nbsp;
                    <ListItemText primary={id} />
                  </ListItem>
                </NavLink>
              );
            })}
          </ul>
        </li>
      ))}
    </List>
  );
}
