import React from "react";
import { Box, Typography, Paper, Link, List, ListItem } from "@mui/material";

const CookiesPolicy = () => {
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
        COOKIES POLICY
      </Typography>

      <Typography variant="body2" sx={{ mb: 3, color: "#fff" }}>
        This Cookies Policy explains how YoPips uses cookies and similar
        technologies to recognize you when you visit our website.
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1, color: "#fff" }}>
        WHAT ARE COOKIES?
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: "#fff" }}>
        Cookies are small data files placed on your device when you visit a
        website. They are widely used to make websites work or work more
        efficiently.
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1, color: "#fff" }}>
        HOW WE USE COOKIES
      </Typography>
      <List dense sx={{ mb: 2, pl: 2 }}>
        {[
          "Analyze site traffic and usage",
          "Customize your user experience",
          "Remember your preferences",
          "Track affiliate referrals",
        ].map((item, index) => (
          <ListItem key={index} sx={{ color: "#fff", display: "list-item" }}>
            ✔ {item}
          </ListItem>
        ))}
      </List>

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1, color: "#fff" }}>
        MANAGING COOKIES
      </Typography>
      <Typography variant="body2" sx={{ color: "#fff" }}>
        You can control cookies through your browser settings. However,
        disabling cookies may impact your experience on our site.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" sx={{ color: "#fff", textAlign: "center" }}>
          For more details, contact us at {" "}
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

export default CookiesPolicy;
