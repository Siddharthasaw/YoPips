import React from "react";
import { Box, Typography, Paper, Link, List, ListItem } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 600,
        margin: "auto",
        p: 4,
        borderRadius: 2,
        mt: 5,
        mb: 5,
        backgroundColor: "#1f1f1f",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{ color: "gold" }}
      >
        PRIVACY POLICY
      </Typography>

      <Typography variant="body2" sx={{ mb: 3, color: "#fff" }}>
        We value your privacy. This Privacy Policy explains how YoPips collects,
        uses, and protects your personal information when you use our platform.
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1, color: "#fff" }}>
        INFORMATION WE COLLECT
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: "#fff" }}>
        We collect your name, email address, and investment amount when you
        sign up and start trading on our platform.
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1, color: "#fff" }}>
        HOW WE USE YOUR DATA
      </Typography>
      <List dense sx={{ mb: 2, pl: 2 }}>
        {[
          "Manage your account and investments",
          "Provide real-time trading transparency",
          "Notify you about updates and offers",
          "Ensure platform security and support",
        ].map((item, index) => (
          <ListItem key={index} sx={{ color: "#fff", display: "list-item" }}>
            ✔ {item}
          </ListItem>
        ))}
      </List>

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1, color: "#fff" }}>
        DATA SECURITY
      </Typography>
      <Typography variant="body2" sx={{ color: "#fff" }}>
        We protect your data with industry-standard encryption and never share
        your personal information with third parties without consent.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" sx={{ color: "#fff", textAlign: "center" }}>
          For any questions, contact us at{" "}
          <Link
            href="mailto:support@yopips.com"
            sx={{ color: "gold", textDecoration: "none" }}
          >
            support@yopips.com
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
};

export default PrivacyPolicy;
