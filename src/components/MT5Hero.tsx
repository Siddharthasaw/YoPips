import React from "react";
import { Box, Button, Typography } from "@mui/material";


const HeroMT5: React.FC = () => {
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
        Trade with <span style={{color: '#f0b90b'}}>MT5</span>
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: 600, opacity: 0.8 }}>
        Experience seamless and automated trading with our MT5 platform.
        Get full transparency and maximize your daily returns.
      </Typography>

      <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
        <Button variant="contained" sx={{backgroundColor: '#f0b90b', color: 'black', fontWeight: 550, textTransform: 'capitalize'}}>
          Start Trading
        </Button>
        <Button variant="outlined" color="inherit" sx={{border: '1px solid rgb(96, 96, 96)', color: '#fff', fontWeight: 550, textTransform: 'capitalize'}}>
          Learn More
        </Button>
      </Box>
    </Box>
      

      </>
  );
};

export default HeroMT5;
