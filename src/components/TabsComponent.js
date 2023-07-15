import { useDispatch } from "react-redux";
import { your, all, blocked } from "../redux/slices/tabSlice";

import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabsComponent = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        const dispatchMap = {
            0: your,
            1: all,
            2: blocked
        };
        dispatch(dispatchMap[newValue]());
    };

    return (
        <>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Your" {...a11yProps(0)} />
          <Tab label="All" {...a11yProps(1)} />
          <Tab label="Blocked" {...a11yProps(2)} />
        </Tabs>
      </Box>
      </>
    );
};

export default TabsComponent;