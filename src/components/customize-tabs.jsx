import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

const CustomizeTabs = ({ tabs, onChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Tabs
      value={selectedTab}
      onChange={handleTabChange}
      variant="scrollable"
      scrollButtons="auto"
      TabIndicatorProps={{ style: { display: "none" } }}
      // sx={{
      //   "& .MuiTabs-scroller": {
      //     display: "flex",
      //   },
      //   "& .MuiTabs-flexContainer": {
      //     width: "100%",
      //     justifyContent: "space-between",
      //     gap: "20px", // optional gap between tabs
      //   },
      // }}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab}
          sx={{
            flex: 1,
            maxWidth: "none",
            backgroundColor: "#FFFFFF",
            textTransform: "none",
            color: "#00000085",
            fontWeight: 400,
            fontSize: "20.48px",
            borderRadius: "7px",
            padding: "15px 26px",
            "&.Mui-selected": {
              background: "#D5DFE6",
              color: "#000000 !important",
            },
            minWidth: "190px",
          }}
          disableRipple
        />
      ))}
    </Tabs>
  );
};

export default CustomizeTabs;
