import { Box, Divider, Typography } from "@mui/material";
import { PlanCard } from "..";
import { thingsBoardPricing, trendzBoardPricing } from "../../constant";

const UpdatePlanModal = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <Typography
        sx={{ fontSize: "34.55px", fontWeight: "400", color: "#147FCC" }}
      >
        Chose the Subscription Plan
      </Typography>
      <Divider sx={{ backgroundColor: "#000000" }} />
      <Box sx={{ p: "10px 10px 30px 20px" }}>
        <Typography sx={{ fontSize: "26.52px" }}>Things Boards</Typography>
        <Box
          sx={{
            display: "flex",
            columnGap: "30px",
            flexWrap: "wrap",
            rowGap: "15px",
            mt: "10px",
          }}
        >
          {thingsBoardPricing?.map((item, index) => (
            <PlanCard
              name={item?.name}
              price={item?.price}
              width={item?.width}
              height={item?.height}
              features={item?.features}
              key={index}
            />
          ))}
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "#000000" }} />
      <Box sx={{ p: "10px 10px 30px 20px" }}>
        <Typography sx={{ fontSize: "26.52px" }}>
          Things Boards + Trendz
        </Typography>
        <Box
          sx={{
            display: "flex",
            // columnGap: "30px",
            flexWrap: "wrap",
            rowGap: "15px",
            mt: "10px",
            justifyContent: "space-between",
          }}
        >
          {trendzBoardPricing?.map((item, index) => (
            <PlanCard
              name={item?.name}
              price={item?.price}
              width={item?.width}
              height={item?.height}
              features={item?.features}
              key={index}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default UpdatePlanModal;
