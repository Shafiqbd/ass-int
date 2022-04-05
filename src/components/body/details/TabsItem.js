import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsItem() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label=" All" {...a11yProps(0)} />
          <Tab label="Comments" {...a11yProps(1)} />
          <Tab label="Work Log" {...a11yProps(2)} />
          <Tab label=" History" {...a11yProps(3)} />
          <Tab label="Activity" {...a11yProps(4)} />
          <Tab label="Transition" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
        <p className="item">
          <KeyboardArrowDownIcon /> &nbsp;
          <Avatar className="avarter" alt="Shafiq Sharp" src="{img}" /> &nbsp; Md. Shafiqul Islam &nbsp; 23/05/1995
          3:20AM
        </p>
        <p className="desc">In publishing and graphic design, Lorem ipsum is a</p>
        <Divider className="hr" />
      </TabPanel>
    </Box>
  );
}
