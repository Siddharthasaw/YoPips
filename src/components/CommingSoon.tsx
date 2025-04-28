import React from "react";
import { Box, Typography } from "@mui/material";

import CommingSoonIMG from "../../public/images/CommingSoon.png";

const CommingSoon: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(135deg,rgb(25, 25, 25),rgb(48, 48, 48))",
          color: "white",
          textAlign: "center",
          py: 10,
          px: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Our Dashboard is <span style={{ color: "#f0b90b" }}>Launching Soon!</span>
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 600, opacity: 0.8 }}>
          We’re working hard to bring you an amazing experience. Stay tuned — something exciting is on its way!
        </Typography>

        <Box
          sx={{
            position: "relative",
            marginTop: "70px",
            width: "100%",
            maxWidth: 900,
            "& img": {
              width: "100%",
              animation: "moveEffect 8s infinite alternate ease-in-out", // Slower and smoother animation
              filter: "drop-shadow(0px 0px 20px #f0b90b)",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "radial-gradient(circle, rgba(240,185,11,0.3) 0%, rgba(0,0,0,0) 70%)",
              animation: "pulseEffect 3s infinite",
            },
          }}
        >
          <img src={CommingSoonIMG} alt="Coming Soon" />
        </Box>
      </Box>

      <style>
        {`
          @keyframes moveEffect {
            0% {
              transform: translateY(0px);
            }
            100% {
              transform: translateY(-30px); /* Increased movement range */
            }
          }

          @keyframes pulseEffect {
            0% {
              opacity: 0.8;
            }
            50% {
              opacity: 0.4;
            }
            100% {
              opacity: 0.8;
            }
          }
        `}
      </style>
    </>
  );
};

export default CommingSoon;
