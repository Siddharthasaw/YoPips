import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper, MenuItem, Select, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

import Conatctimage from "../../public/images/MT5banaer.png";

import { Link } from "react-router-dom"; // Correct import for Link

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted Successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Container
      maxWidth={false} // Full width container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#2d2d2d", // Dark background
        width: "100%",
        py: 4,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: 3,
          overflow: "hidden",
          maxWidth: 1200,
          width: "100%",
          bgcolor: "#1e1e1e", // Dark grey form container
          color: "white",
        }}
      >
        {/* Left Side: Image */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" }, // Flexbox for centering
            justifyContent: "center", // Horizontally center the image
            alignItems: "center", // Vertically center the image
            bgcolor: "#2c2c2c",
          }}
        >
          <img
            src={Conatctimage}
            alt="Contact"
            style={{
              width: "50%", // Adjusted width to 50%
              objectFit: "cover",
              borderRadius: "8px", // Optional: Add rounded corners
            }}
          />
        </Box>

        {/* Right Side: Form */}
        <Box sx={{ flex: 1, p: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="gold" textAlign="center">
            Contact Us
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2} textAlign="center" sx={{color: "white"}}>
            We'd love to hear from you! Please fill out the form below.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
                InputLabelProps={{
                  style: { color: "white" }, // Label color set to white
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{color: "white"}}>
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "gold" },
                    "&:hover fieldset": { borderColor: "gold" },
                    "&.Mui-focused fieldset": { borderColor: "gold" },
                  },
                }}
              />
              <TextField
                label="Email Address"
                type="email"
                name="email"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
                InputLabelProps={{
                  style: { color: "white" }, // Label color set to white
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{color: "white"}}>
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "gold" },
                    "&:hover fieldset": { borderColor: "gold" },
                    "&.Mui-focused fieldset": { borderColor: "gold" },
                  },
                }}
              />
            </Box>
            <Select
              displayEmpty
              value={formData.subject}
              name="subject"
              fullWidth
              required
              onChange={handleChange}
              inputProps={{
                style: { color: "white"}, // Dropdown text color set to white
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gold" },
                  "&:hover fieldset": { borderColor: "gold" },
                  "&.Mui-focused fieldset": { borderColor: "gold" },
                },
                "& .MuiInputLabel-root": {
                  color: "white", // Label color set to white
                },
              }}
            >
              <MenuItem value="" disabled >
                <span style={{ color: "white" }}>Choose Subject</span>
              </MenuItem>
              <MenuItem value="General Inquiry" >General Inquiry</MenuItem>
              <MenuItem value="Support">Support</MenuItem>
              <MenuItem value="Feedback">Feedback</MenuItem>
            </Select>
            <TextField
              label="Your Message"
              name="message"
              fullWidth
              required
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: "white" }, // Label color set to white
              }}
              InputProps={{
                style: { color: "white" }, // Input text color set to white
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gold" },
                  "&:hover fieldset": { borderColor: "gold" },
                  "&.Mui-focused fieldset": { borderColor: "gold" },
                },

                
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "transparent",
                    border: "1px solid #2c2c2c",
                    color: "white",
                    "&:hover": { bgcolor: "#333" },
                    textTransform: "capitalize",
                  }}
                >
                  Back to Home
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "gold",
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#b8860b" },
                  textTransform: "capitalize"
                }}
              >
                Submit Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactForm;
