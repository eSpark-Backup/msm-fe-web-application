import { Box, Typography } from "@mui/material";

const DataProgressBar = ({ name, value, progress }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Typography
        sx={{
          fontSize: "19px",
          width: { xs: "100%", md: "30%" },
          // textAlign: { xs: "center", md: "initial" },
        }}
      >
        {name}
      </Typography>
      <Typography sx={{ fontSize: "19px" }}>{value}</Typography>
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          backgroundColor: "#C4C4CC",
          borderRadius: "13px",
          height: "23px",
        }}
      >
        <Box
          sx={{
            width: progress,
            backgroundColor: "#0C89E2",
            borderRadius: "13px",
            height: "100%",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default DataProgressBar;
