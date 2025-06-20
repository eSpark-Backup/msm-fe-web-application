import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";

const TemplateCard = ({
  title,
  description,
  features,
  actionLabel,
  actionColor = "primary",
  chipLabel,
  chipColor = "default",
  onAction,
  onDetails,
  borderColor = "#1976d2",
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        "@media (min-width:800px)": {
          width: "49%",
        },
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        boxShadow: 3,
        position: "relative",
        borderTop: `12px solid ${borderColor}`,
      }}
    >
      {chipLabel && (
        <Chip
          label={chipLabel}
          color={chipColor}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 20,
            color: "#147FCC",
            fontSize: "16px",
            width: "35%",
            minWidth: "50px",
            maxWidth: "140px",
            borderRadius: "0",
            padding: "18px",
            border: "2px solid #147FCC",
          }}
        />
      )}
      <CardContent sx={{ pt: 2 }}>
        <Typography variant="h6" fontWeight="bold" fontSize="25px" gutterBottom>
          {title}
        </Typography>

        <Typography
          variant="body2"
          fontSize="18px"
          sx={{ mb: 1.5, color: "text.secondary" }}
        >
          {description}
        </Typography>

        <Box component="ul" sx={{ pl: 2, mb: 1.5 }}>
          {features.map((feature, index) => (
            <li key={index}>
              <Typography
                variant="body2"
                fontSize="18px"
                sx={{ color: "text.secondary" }}
              >
                {feature}
              </Typography>
            </li>
          ))}
        </Box>

        <Typography
          variant="body2"
          fontSize="18px"
          sx={{ mb: 2, color: "text.secondary" }}
        >
          Press Install button to get started!
        </Typography>

        <Box display="flex" justifyContent="end" gap="20px">
          <Button
            variant="outlined"
            sx={{
              color: "#147FCC",
              fontSize: "16px",
              width: "30%",
              minWidth: "65px",
              maxWidth: "125px",
              borderRadius: "12px",
              border: "2px solid #147FCC",
            }}
            onClick={onDetails}
          >
            Details
          </Button>
          <Button
            variant="contained"
            color={actionColor}
            onClick={onAction}
            sx={{
              color: "#fff",
              fontSize: "16px",
              width: "30%",
              minWidth: "65px",
              maxWidth: "125px",
              borderRadius: "12px",
              padding: "20px",
              backgroundColor:
                actionColor === "error" ? undefined : actionColor,
            }}
          >
            {actionLabel}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
