import { Tab, Tabs, Box } from "@mui/material";
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
    <Box
      sx={{
        width: "100%",
        maxWidth: "100vw", // Ensure it doesn't exceed viewport width
        overflow: "hidden", // Hide any potential overflow
      }}
    >
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
          "& .MuiTabs-scroller": {
            overflow: "auto !important",
            scrollbarWidth: "none", // For Firefox
            "&::-webkit-scrollbar": {
              display: "none", // For Chrome/Safari
            },
          },
          "& .MuiTabs-flexContainer": {
            display: "flex",
            gap: "20px",
            minWidth: "100%", // Optional; can remove if unnecessary
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            sx={{
              flex: "1 0 auto", // Allow shrinking but not growing
              minWidth: "fit-content", // Minimum width based on content
              backgroundColor: "#FFFFFF",
              textTransform: "none",
              color: "#00000085",
              fontWeight: 400,
              fontSize: "20.48px",
              borderRadius: "7px",
              padding: "15px 26px",
              overflowX: "auto",
              "&.Mui-selected": {
                background: "#D5DFE6",
                color: "#000000 !important",
              },
              whiteSpace: "nowrap",
            }}
            disableRipple
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default CustomizeTabs;
