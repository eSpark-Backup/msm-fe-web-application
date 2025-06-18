import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Account,
  logout,
  notification,
  online,
  rightArrow,
  threeVerticalDots,
  userProfileImage,
} from "../assets";

const Navbar = ({
  handleDrawerToggle,
  selectedChild,
  expandedItem,
  activeItem,
}) => {
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: { xs: "10px", md: "10px 30px 10px 30px" },
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {!isLargeScreen && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box sx={{ display: "flex", columnGap: "10px" }}>
          <Typography
            sx={{
              fontSize:
                expandedItem === ""
                  ? { xs: "18.14px", md: "36.14px" }
                  : { xs: "14.72px", md: "36.14px" },
              fontWeight: "400",
              color: expandedItem === "" ? "#000000" : "#5D5A5A",
            }}
          >
            {activeItem}
          </Typography>
          {expandedItem !== "" && (
            <Box sx={{ display: "flex", columnGap: "10px" }}>
              <img src={rightArrow} alt="" />
              <Typography
                sx={{
                  fontSize: { xs: "14.72px", md: "36.14px" },
                  fontWeight: "400",
                  color: "#000000",
                }}
              >
                {selectedChild}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          columnGap: { xs: "10px", md: "30px" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: "1px solid #21272A40",
            p: { xs: "5px", md: "15px 20px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            columnGap: { xs: "5px", md: "15px" },
            borderRadius: "12px",
          }}
        >
          <Avatar
            src={userProfileImage}
            alt="User"
            sx={{
              width: { xs: 32, md: 58 },
              height: { xs: 32, md: 58 },
              objectFit: "fill",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              rowGap: "1px",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              sx={{
                fontSize: "18.94px",
                fontWeight: "400",
                color: "#000000",
                width: "100%",
              }}
            >
              John deo
            </Typography>
            <Typography
              sx={{
                fontSize: "13.44px",
                fontWeight: "400",
                color: "#5D5A5A",
                display: { xs: "none", md: "block" },
              }}
            >
              Administrator
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-end", md: "space-between" },
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "13.44px",
                  fontWeight: "400",
                  color: "#5D5A5A",
                  display: { xs: "none", md: "block" },
                }}
              >
                Status
              </Typography>
              <img
                src={online}
                alt="Icon"
                style={{ width: "14px", height: "14px" }}
              />
            </Box>
          </Box>
        </Box>
        <img
          src={notification}
          alt="Icon"
          style={{ width: "27px", height: "27px" }}
        />
        <img
          src={threeVerticalDots}
          alt="Icon"
          style={{ width: "7px", height: "23.3px", cursor: "pointer" }}
          onClick={handleClick}
        />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          sx={{
            width: "220px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "21.19px", fontWeight: "400", color: "#000000" }}
          >
            Account
          </Typography>
          <img
            src={Account}
            alt="Icon"
            style={{ width: "21px", height: "21px" }}
          />
        </MenuItem>
        <MenuItem
          sx={{
            width: "220px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "21.19px", fontWeight: "400", color: "#FB3030" }}
          >
            Logout
          </Typography>
          <img
            src={logout}
            alt="Icon"
            style={{ width: "21px", height: "21px" }}
          />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Navbar;
