import { Box, Button, colors, Divider, Typography } from "@mui/material";
import OutlinedInput from "../outlined-input";

const CouponModal = () => {
  return (
    <Box sx={{ pb: "30px" }}>
      <Typography
        sx={{ fontSize: "34.55px", fontWeight: "400", color: "#147FCC" }}
      >
        Summary
      </Typography>
      <Typography sx={{ fontSize: "26.52px" }}>Subscription details</Typography>
      <Divider sx={{ backgroundColor: "#000", mt: "15px" }} />
      <Box
        sx={{
          p: "15px 15px 30px 15px",
          display: "flex",
          flexDirection: "column",
          rowGap: "15px",
        }}
      >
        <Typography sx={{ fontSize: "28px" }}>
          Selected Subscription details
        </Typography>
        <Typography sx={{ fontSize: "26.52px" }}>
          Things Board Clouds Prototype - 149.00 USD
          <Typography component={"span"} sx={{ fontSize: "20px" }}>
            {" "}
            /month
          </Typography>
        </Typography>
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            backgroundColor: "#D9D9D9",
            border: "1px solid #147FCC",
            borderRadius: "11px",
            display: "flex",
            // p: "15px 0px ",
          }}
        >
          <Box sx={{ width: "75%" }}>
            <OutlinedInput
              placeholder={"Coupon Code"}
              sx={{
                width: "100%",
                border: "none",
                "& .MuiOutlinedInput-root": {
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                  border: "none",
                  backgroundColor: "none",
                  color: "#000",
                },
                "& input::placeholder": {
                  color: "#000",
                  fontWeight: 400,
                  opacity: 1,
                  fontSize: "19.2px",
                },
              }}
            />
          </Box>
          <Button
            variant="secondary"
            sx={{ width: "25%", height: "69px" }}
            disableRipple
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CouponModal;
