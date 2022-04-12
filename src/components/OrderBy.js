import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Link, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useNavigate } from "react-router";

export default function OrderBy() {
  const navigate = useNavigate();

  // const loadDetails = (item) => {
  //   navigate(`9bsdfse321deb4d-3b7d${item + 1}`);
  // };
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
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Link to="#" key={item} className="order-area">
                <ListItem className="list" key={item}>
                  <RadioButtonCheckedIcon /> &nbsp;
                  <ListItemText primary={`9bsdfse321deb4d-3b7d${item + 1}`} />
                </ListItem>
              </Link>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
