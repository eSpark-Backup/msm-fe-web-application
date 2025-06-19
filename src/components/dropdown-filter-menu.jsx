import { Box, Menu, Typography } from "@mui/material";
import { downArrow } from "../assets";

const DropdownFilterMenu = ({
  options,
  anchorEl,
  setAnchorEl,
  handleSelect,
}) => {
  const open = Boolean(anchorEl);

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleSelectOption = (item) => {
    handleSelect(item);
    setAnchorEl(null);
  };
  return (
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
      {options.map((item, ind) => {
        return item === "filter" ? null : ind === 0 ? (
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
              onClick={() => handleSelectOption(item)}
            >
              {item.slice(0, 1).toUpperCase() + item.slice(1)}
            </Typography>
            <img
              src={downArrow}
              alt="Icon"
              style={{ transform: "rotate(180deg)" }}
              onClick={handleClose}
            />
          </Box>
        ) : (
          <Typography
            sx={{ fontSize: "21.19px", mt: "10px", cursor: "pointer" }}
            onClick={() => handleSelectOption(item)}
          >
            {item.slice(0, 1).toUpperCase() + item.slice(1)}
          </Typography>
        );
      })}
    </Menu>
  );
};

export default DropdownFilterMenu;
