import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import * as React from "react";

const currencies = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Project",
    label: "Project",
  },
  {
    value: "Notice",
    label: "Notice",
  },
  {
    value: "Program",
    label: "Program",
  },
];

export default function Select({ label }) {
  const [currency, setCurrency] = React.useState("All");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "15ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-select-currency" select label={label} value={currency} onChange={handleChange}>
          {currencies.map((option) => (
            <MenuItem className="item" key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div></div>
    </Box>
  );
}
