import { Box, Button, Chip, Menu, Paper, Typography } from "@mui/material";
import {
  ComponentHeader,
  CustomizeTabs,
  DataProgressBar,
  DynamicModal,
  DropdownFilterMenu,
} from "../../components/index.js";
import { useEffect, useState } from "react";
import { card, downArrow, online, plus } from "../../assets/index.js";
import { planDetailsContent } from "../../constant/index.js";
import Subscription from "./subscription.jsx";
import { PaymentAlertModal } from "../../components/modals/index.js";

const PlanBilling = () => {
  const tabs = [
    "Subscription",
    "Billing Information",
    "Invoices",
    "Upcoming invoices",
    "Audit Logs",
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [filter1El, setFilter1El] = useState(null);
  const [filterValue1, setFilterValue1] = useState("last");

  const handleClickFilter1 = (event) => {
    setFilter1El(event.currentTarget);
  };

  return (
    <>
      <Box
        sx={{
          m: "10px 0px 20px 0px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "220px" }}>
          <Button
            variant="primary"
            disableRipple
            onClick={() => setShowPaymentModal(true)}
          >
            <img src={card} alt="" />
            Payment Alert
          </Button>
        </Box>
      </Box>
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
            onClick={handleClickFilter1}
          >
            <Typography
              sx={{
                color: "#454545",
                fontSize: "24.1px",
                fontWeight: "400",
              }}
            >
              {filterValue1.slice(0, 1).toUpperCase() + filterValue1.slice(1)}
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
      </Paper>

      <DynamicModal
        open={showPaymentModal}
        handleClose={() => setShowPaymentModal(false)}
        hideFooter={true}
      >
        <PaymentAlertModal />
      </DynamicModal>
      <DropdownFilterMenu
        anchorEl={filter1El}
        setAnchorEl={setFilter1El}
        options={["Last Day", "weekly", "monthly"]}
        handleSelect={(item) => setFilterValue1(item)}
      />
    </>
  );
};

export default PlanBilling;
