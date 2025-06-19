import { Box, Button, Chip, Menu, Paper, Typography } from "@mui/material";
import {
  ComponentHeader,
  CustomizeTabs,
  DataProgressBar,
} from "../../components/index.js";
import { useEffect, useState } from "react";
import { downArrow, online } from "../../assets/index.js";
import { planDetailsContent } from "../../constant/index.js";
import Subscription from "./subscription.jsx";

const PlanBilling = () => {
  const tabs = [
    "Subscription",
    "Billing Information",
    "Invoices",
    "Upcoming invoices",
    "Audit Logs",
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selectedChoice, setSelectedChoice] = useState("last");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClicked = (item) => {
    setSelectedChoice(item);
    setAnchorEl(null);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleChoiceChange = (choice) => {};
  return (
    <Paper sx={{ backgroundColor: "#FFFBFB" }}>
      <ComponentHeader
        onInputChange={(e) => console.log(e.target.value)}
        handleRefresh={() => {}}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: "10px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <Typography
            sx={{ color: "#454545", fontSize: "24.1px", fontWeight: "400" }}
          >
            {selectedChoice === "last"
              ? "Last Day"
              : selectedChoice.slice(0, 1).toUpperCase() +
                selectedChoice.slice(1)}
          </Typography>
          <img src={downArrow} alt="Icon" />
        </Box>
      </ComponentHeader>
      <Box
        sx={{
          border: "1px solid #00000066",
          borderRadius: "6px",
          p: "15px",
          mt: "10px",
        }}
      >
        <CustomizeTabs onChange={(val) => setActiveTab(val)} tabs={tabs} />
      </Box>
      {activeTab === 0 ? <Subscription /> : <></>}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            width: "226px",
            p: "10px",
            borderRadius: "7.77px",
            border: "none",
            backgroundColor: "white",
            marginLeft: "10px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{ fontSize: "21.19px" }}
            onClick={() => handleMenuItemClicked("last")}
          >
            Last Day
          </Typography>
          <img
            src={downArrow}
            alt="Icon"
            style={{ transform: "rotate(180deg)" }}
            onClick={handleClose}
          />
        </Box>
        <Typography
          sx={{ fontSize: "21.19px", mt: "10px", cursor: "pointer" }}
          onClick={() => handleMenuItemClicked("weekly")}
        >
          Weekly
        </Typography>
        <Typography
          sx={{ fontSize: "21.19px", mt: "10px", cursor: "pointer" }}
          onClick={() => handleMenuItemClicked("monthly")}
        >
          Monthly
        </Typography>
      </Menu>
    </Paper>
  );
};

export default PlanBilling;
