import React from "react";
import { Box } from "@mui/material";
import TemplateCard from "../../components/template-card";

const SolutionTemplates = () => {
  return (
    <Box display="flex" gap={2} p={3} flexWrap="wrap">
      <TemplateCard
        title="Temperature & Humidity Sensors"
        description="Template for temperature and humidity sensors demonstrating common platform capabilities:"
        features={[
          "Dashboard with ability to manage sensors and visualize collected data;",
          "Rules to generate temperature alarms.",
        ]}
        actionLabel="Install"
        actionColor="#147FCC"
        onAction={() => alert("Installed Temperature & Humidity Sensors")}
        onDetails={() => alert("Details Clicked")}
      />

      <TemplateCard
        title="Smart Office"
        description="Template for smart office demonstrating common platform capabilities:"
        features={[
          "Simple dashboard with ability to manage smart office sensors;",
          "Rules to generate temperature alarms.",
        ]}
        chipLabel="Instruction"
        chipColor="primary"
        actionLabel="Delete"
        actionColor="error"
        onAction={() => alert("Deleted Smart Office")}
        onDetails={() => alert("Details Clicked")}
      />
      <TemplateCard
        title="Fleet Tracking"
        description="Template for temperature and humidity sensors demonstrating common platform capabilities:"
        features={[
          "Dashboard with ability to manage sensors and visualize collected data;",
          "Rules to generate temperature alarms.",
        ]}
        actionLabel="Install"
        actionColor="#147FCC"
        onAction={() => alert("Installed Temperature & Humidity Sensors")}
        onDetails={() => alert("Details Clicked")}
      />
      <TemplateCard
        title="Fuel Tracking Monitoring"
        description="Template for temperature and humidity sensors demonstrating common platform capabilities:"
        features={[
          "Dashboard with ability to manage sensors and visualize collected data;",
          "Rules to generate temperature alarms.",
        ]}
        actionLabel="Install"
        actionColor="#147FCC"
        onAction={() => alert("Installed Temperature & Humidity Sensors")}
        onDetails={() => alert("Details Clicked")}
      />
    </Box>
  );
};

export default SolutionTemplates;
