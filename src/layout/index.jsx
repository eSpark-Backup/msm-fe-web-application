import { Box, Drawer, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import {
  advance,
  advanceActive,
  alarm,
  alarmActive,
  api,
  apiActive,
  bell,
  bellActive,
  billing,
  billingActive,
  customer,
  customerActive,
  dashboard,
  dashboardActive,
  edge,
  edgeActive,
  entities,
  entitiesActive,
  home,
  homeActive,
  integration,
  integrationActive,
  label,
  labelActive,
  mobile,
  mobileActive,
  profile,
  profileActive,
  resource,
  resourceActive,
  rules,
  rulesActive,
  security,
  securityActive,
  settings,
  settingsActive,
  solution,
  solutionActive,
  user,
  userActive,
} from "../assets";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const drawerWidth = 370;

const Layout = () => {
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [expandedItem, setExpandedItem] = useState("");
  const [selectedChild, setSelectedChild] = useState("");

  const navigate = useNavigate();

  const sideBarItems = [
    { route: "/home", title: "Home", icon: home, activeIcon: homeActive },
    {
      route: "/plan-billing",
      title: "Plan & Billing",
      icon: billing,
      activeIcon: billingActive,
    },
    { route: "/alarms", title: "Alarms", icon: alarm, activeIcon: alarmActive },
    {
      route: "/dashboard",
      title: "Dashboard",
      icon: dashboard,
      activeIcon: dashboardActive,
    },
    {
      route: "/solutions-templates",
      title: "Solutions Templates",
      icon: solution,
      activeIcon: solutionActive,
    },
    {
      route: "/entities",
      title: "Entities",
      icon: entities,
      activeIcon: entitiesActive,
      children: [
        { title: "Device", route: "/entities/device" },
        { title: "Assets", route: "/entities/assets" },
        { title: "Entity Views", route: "/entities/entity-views" },
        { title: "Gateways", route: "/entities/gateways" },
      ],
    },
    {
      route: "/profiles",
      title: "Profiles",
      icon: profile,
      activeIcon: profileActive,
      children: [
        { title: "Profile Device", route: "/profiles/profile-device" },
        { title: "Profile Assets", route: "/profiles/profile-assets" },
      ],
    },
    { route: "/users", title: "Users", icon: user, activeIcon: userActive },
    {
      route: "/customers",
      title: "Customers",
      icon: customer,
      activeIcon: customerActive,
    },
    {
      route: "/integrations-center",
      title: "Integrations center",
      icon: integration,
      activeIcon: integrationActive,
      children: [
        { title: "Integration", route: "/integrations-center/integration" },
        {
          title: "Data Convertors",
          route: "/integrations-center/data-convertors",
        },
      ],
    },
    {
      route: "/rules-chain",
      title: "Rules Chain",
      icon: rules,
      activeIcon: rulesActive,
    },
    {
      route: "/edge-management",
      title: "Edge Management",
      icon: edge,
      activeIcon: edgeActive,
      children: [
        { title: "Instances", route: "/edge-management/instances" },
        {
          title: "Rule chain template",
          route: "/edge-management/rule-chain-template",
        },
        {
          title: "Integration Template",
          route: "/edge-management/integration-template",
        },
        {
          title: "Converter template",
          route: "/edge-management/converter-template",
        },
      ],
    },
    {
      route: "/advance-features",
      title: "Advance Features",
      icon: advance,
      activeIcon: advanceActive,
      children: [
        { title: "OTA Update", route: "/advance-features/ota-update" },
        {
          title: "Version control",
          route: "/advance-features/version-control",
        },
        { title: "Scheduler", route: "/advance-features/scheduler" },
      ],
    },
    {
      route: "/resources",
      title: "Resources",
      icon: resource,
      activeIcon: resourceActive,
      children: [
        { title: "Widget Library", route: "/resources/widget-library" },
        { title: "Image galley", route: "/resources/image-galley" },
        { title: "SCADA Symbols", route: "/resources/scada-symbols" },
        { title: "JavaScript library", route: "/resources/javaScript-library" },
        { title: "Resources library", route: "/resources/resources-library" },
      ],
    },
    {
      route: "/notification-center",
      title: "Notification center",
      icon: bell,
      activeIcon: bellActive,
    },
    {
      route: "/mobile-center",
      title: "Mobile Center",
      icon: mobile,
      activeIcon: mobileActive,
    },
    {
      route: "/api-usage",
      title: "API usage",
      icon: api,
      activeIcon: apiActive,
    },
    {
      route: "/white-labeling",
      title: "White Labeling",
      icon: label,
      activeIcon: labelActive,
    },
    {
      route: "/security",
      title: "Security",
      icon: security,
      activeIcon: securityActive,
      children: [
        {
          title: "Two factor authentication",
          route: "/security/two-factor-authentication",
        },
        { title: "Role", route: "/security/role" },
        { title: "Self registration", route: "/security/self-registration" },
        { title: "Audit logs", route: "/security/audit-logs" },
        { title: "OAuth 2.0", route: "/security/oauth-2.0" },
      ],
    },
    {
      route: "/settings",
      title: "Settings",
      icon: settings,
      activeIcon: settingsActive,
    },
  ];

  const HandleItemClick = (item) => {
    console.log(item);
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
