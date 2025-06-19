import { Box } from "@mui/material";
import { plus, refresh2 } from "../assets";
import SearchBar from "./search-bar";

const ComponentHeader = ({
  handleRefresh,
  onInputChange,
  showPlus,
  children,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", columnGap: "15px" }}>{children}</Box>
      <Box sx={{ display: "flex", columnGap: "25px" }}>
        {showPlus && <img src={plus} alt="Icon" />}
        <img
          src={refresh2}
          alt="Icon"
          onClick={handleRefresh}
          style={{ cursor: "pointer" }}
        />
        <SearchBar placeholder={"Search"} onInputChange={onInputChange} />
      </Box>
    </Box>
  );
};

export default ComponentHeader;
