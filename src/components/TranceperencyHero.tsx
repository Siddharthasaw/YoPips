import React from "react";
import { Button, Box, Typography } from "@mui/material";
import TranceHero from "../../public/images/trancehero.png";

const TranceperencyHero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 4 },
        py: { xs: 6, md: 8 },
        bgcolor: "#121212",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Left Side Content */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { md: "50%" },
            px: 2,
            mb: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#1f1f1f",
              px: 2,
              py: 0.5,
              borderRadius: "20px",
              width: "fit-content",
            }}
          >
            <Typography sx={{ fontSize: 14, color: "#FFD700", ml: 1 }}>
              Transparency
            </Typography>
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "28px", md: "42px" },
              fontWeight: "bold",
              my: 2,
              lineHeight: 1.4,
            }}
          >
            Your Ultimate Trading Dashboard
          </Typography>

          <Typography sx={{ fontSize: 18, lineHeight: 1.6, mb: 3 }}>
            Monitor market trends, track your investments, and stay ahead with real-time updates.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD700",
              color: "black",
              px: 3,
              py: 1.5,
              fontSize: 16,
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#e6c200" },
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* Right Side Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
          }}
        >
          <Box
            component="img"
            src={TranceHero}
            alt="Trading Dashboard"
            sx={{
              width: "100%",
              maxWidth: 500,
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TranceperencyHero;
