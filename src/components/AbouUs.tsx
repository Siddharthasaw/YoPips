import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AboutImg from "../../public/images/about-transparency.png"; // Replace with actual image path

const AboutUs = () => {
  return (
    <Box
      sx={{
        bgcolor: "#121212",
        color: "white",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 30,
        }}
      >
        {/* Left Side Image */}
        <Box
          component="img"
          src={AboutImg}
          alt="About Transparency"
          sx={{
            width: "100%",
            maxWidth: 350,
            borderRadius: 2,
          }}
        />

        {/* Right Side Content */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 2, fontSize: { xs: "24px", md: "36px" } }}
          >
            About Our Trading System
          </Typography>

          <Typography sx={{ mb: 3, fontSize: "18px", lineHeight: 1.7, color: "rgba(255,255,255,0.8)" }}>
            Our mission is to empower investors with Stable Returns and Steady Growth. We don’t just promise returns,
            we show you how we achieve them. From trade logs to risk metrics, our system will give you full access
            to our gold trading robot's performance and decision-making.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD700",
              color: "black",
              px: 3,
              py: 1.5,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#e6c200",
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
