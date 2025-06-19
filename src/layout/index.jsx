import { Box, Drawer, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { sideBarItems } from "../constant";

const drawerWidth = 370;

const Layout = () => {
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [expandedItem, setExpandedItem] = useState("");
  const [selectedChild, setSelectedChild] = useState("");

  const navigate = useNavigate();

  const HandleItemClick = (item) => {
    setActiveItem(item?.title);
    if (item?.children) {
      setExpandedItem(item?.title);
      setSelectedChild(item?.children[0]?.title);
      navigate(item?.children[0]?.route);
    } else {
      setExpandedItem("");
      navigate(item?.route);
    }
  };

  const HandleChildChange = (item) => {
    navigate(item?.route);
    setSelectedChild(item?.title);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant={isLargeScreen ? "permanent" : "temporary"}
        anchor="left"
        open={isLargeScreen || mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: { xs: "95%", md: drawerWidth },
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: { xs: "95%", md: drawerWidth },
            boxSizing: "border-box",
            borderRadius: "0px",
            boxShadow: "none",
            border: "none",
            px: "0px",
            pt: "130px",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "3px" }}>
          {sideBarItems?.map((item, index) => (
            <React.Fragment key={index}>
              <Box
                sx={{
                  height: "42px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: "15px",
                  backgroundColor:
                    activeItem === item?.title ? "#0C89E2" : "white",
                  cursor: "pointer",
                }}
                onClick={() => HandleItemClick(item)}
              >
                <img
                  src={
                    activeItem === item?.title ? item?.activeIcon : item?.icon
                  }
                  alt="Icon"
                  style={{ width: "26.24px", height: "26.24px" }}
                />
                <Typography
                  sx={{
                    minWidth: "200px",
                    color: activeItem === item?.title ? "#FFFFFF" : "#1E1E1E",
                    fontSize: "22.6px",
                  }}
                >
                  {item?.title}
                </Typography>
              </Box>
              {item?.children && expandedItem === item?.title && (
                <Box
                  sx={{
                    backgroundColor: "#D9D9D961",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                  }}
                >
                  {item?.children?.map((child, index2) => (
                    <Typography
                      key={index2}
                      sx={{
                        fontSize: "22.6px",
                        fontWeight: "400",
                        color: "#1E1E1E",
                        pl: "100px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "block",
                      }}
                      onClick={() => HandleChildChange(child)}
                      title={child?.title}
                    >
                      {child?.title}
                    </Typography>
                  ))}
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          height: "100vh",
          width: "100%",
        }}
      >
        <Navbar
          handleDrawerToggle={handleDrawerToggle}
          activeItem={activeItem}
          selectedChild={selectedChild}
          expandedItem={expandedItem}
        />

        <Box sx={{ p: "20px 25px" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
