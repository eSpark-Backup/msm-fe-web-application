import { Box, Button, Typography } from "@mui/material";

const PlanCard = ({ name, price, features, height, width }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#EEECEC",
        borderTop: "20px solid #0C89E2",
        p: "20px 10px",
        borderRadius: "6.5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: height,
        minWidth: { xs: "100%", md: width },
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "16.07px" }}>{name}</Typography>
        <Typography sx={{ fontSize: "16.07px", fontWeight: "400" }}>
          {price} USD{" "}
          <Typography
            sx={{ fontSize: "10px", fontWeight: "400" }}
            component={"span"}
          >
            /month
          </Typography>
        </Typography>
      </Box>
      <Box
        component="ul"
        sx={{
          listStyle: "disc",
          pl: "25px",
          //   mt: "20px",
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
        }}
      >
        {features?.map((item, index) => (
          <li style={{ fontSize: "13.2px" }} key={index}>
            {item}
          </li>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <Box sx={{ width: "119px" }}>
          <Button
            variant="primary"
            sx={{ height: "29px", fontSize: "10.98px" }}
            disableRipple
          >
            Select
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PlanCard;
