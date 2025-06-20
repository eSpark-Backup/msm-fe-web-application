import { Box, Button, Typography } from "@mui/material";
import { online } from "../../assets";
import { planDetailsContent } from "../../constant";
import { DataProgressBar, DynamicModal } from "../../components";
import { useState } from "react";
import { CouponModal, UpdatePlanModal } from "../../components/modals/index.js";

const Subscription = () => {
  const [updatePlan, setUpdatePlan] = useState(false);
  const [couponModal, setCouponModal] = useState(false);
  return (
    <Box
      sx={{
        border: "1px solid #00000054",
        borderBottomRightRadius: "12px",
        borderBottomLeftRadius: "12px",
        p: "10px",
        mt: "15px",
      }}
    >
      <Box
        sx={{
          borderTop: "5px solid #0C89E2",
          backgroundColor: "#E6E6E6",
          p: { xs: "15px 15px", md: "15px 45px" },
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: "10px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Typography sx={{ fontSize: "20px" }}>
            Current Subscription
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>Status</Typography>
          <Typography sx={{ fontSize: "20px" }}>Subscription Period</Typography>
          <Typography sx={{ fontSize: "20px" }}>Discount</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Typography sx={{ fontSize: "20px" }}>
            Things Board Cloud Startup
          </Typography>
          <Box
            sx={{
              backgroundColor: "#A9F49A",
              border: "0.7px solid #30F408",
              p: "4.22px 17.55px",
              color: "#22A309",
              display: "flex",
              columnGap: "5px",
              width: "fit-content",
              alignItems: "center",
              borderRadius: "13px",
              height: "26px",
            }}
          >
            <img src={online} alt="Icon" />
            <Typography sx={{ color: "#22A309" }}>Active</Typography>
          </Box>
          <Typography sx={{ fontSize: "20px" }}>
            from 2025-04-30 to 2025-05-30
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>No Discount</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "15px",
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "220px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              rowGap: "15px",
              flexDirection: "column",
            }}
          >
            <Button
              variant="primary"
              disableRipple
              onClick={() => setUpdatePlan(true)}
            >
              Update Plan
            </Button>
            <Button
              variant="secondary"
              disableRipple
              onClick={() => setCouponModal(true)}
            >
              Apply Coupon
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          p: { xs: "15px 15px", md: "15px 45px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography sx={{ fontSize: "22px" }}>Plan Detail</Typography>
        <Box sx={{ width: { xs: "100%", sm: "222px" } }}>
          <Button variant="secondary">API Usage</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: { xs: "15px 15px", md: "15px 45px" },
          display: "flex",
          flexDirection: "column",
          rowGap: "15px",
        }}
      >
        {planDetailsContent?.map((item, index) => {
          return (
            <DataProgressBar
              name={item?.name}
              value={item?.value}
              progress={item?.progress}
              key={index}
            />
          );
        })}
      </Box>
      <DynamicModal
        open={updatePlan}
        handleClose={() => setUpdatePlan(false)}
        cancelButtonText={"Cancel"}
        handleCancel={() => setUpdatePlan(false)}
        sx={{
          width: {
            xs: "95%",
            md: "90%",
            lg: "80%",
          },
        }}
      >
        <UpdatePlanModal />
      </DynamicModal>
      <DynamicModal
        open={couponModal}
        handleClose={() => setCouponModal(false)}
        footerDirection={"space-between"}
        cancelButtonText={"Back"}
        handleCancel={() => setCouponModal(false)}
        acceptButtonText={"Update"}
        handleAccept={() => setCouponModal(false)}
      >
        <CouponModal />
      </DynamicModal>
    </Box>
  );
};

export default Subscription;
