import { Box, List, Typography } from "@mui/material";

const PaymentAlertModal = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        pl: "20px",
      }}
    >
      <Typography
        sx={{ fontSize: "34.55px", fontWeight: "400", color: "#147FCC" }}
      >
        Payment Alert
      </Typography>
      <Box>
        <Typography sx={{ fontSize: "22.5px" }}>
          1. Automatic Payment
        </Typography>
        <Typography sx={{ fontSize: "22.5px" }}>
          2. Next charge attempt for 399.00 USD will be on May 30, 2025
        </Typography>
      </Box>
    </Box>
  );
};

export default PaymentAlertModal;
