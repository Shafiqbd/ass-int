import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import * as React from "react";
import "../styles/home.css";

export default function Search() {
  return (
    <Paper className="search" component="form" sx={{ p: "0px 4px", display: "flex", alignItems: "center", width: 200 }}>
      <InputBase
        className="input-search"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "Search" }}
      />
      <IconButton type="submit" sx={{ p: "6px" }} aria-label="search">
        <SearchIcon className="input-search" />
      </IconButton>
    </Paper>
  );
}
