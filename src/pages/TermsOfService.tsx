import React from "react";
import { Box, Typography, Paper, Link } from "@mui/material";

const TermsOfService = () => {
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
        TERMS OF SERVICE
      </Typography>

      <Typography variant="body2" sx={{ mb: 3, color: "#fff" }}>
        This summary is provided only for convenience. Please review the Terms
        of Service below in their entirety for important information and legal
        conditions that apply to your use of the YoPips platform.
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1, color: "#fff" }}>
        YOUR POSTING OF USER CONTENT
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, color: "#fff" }}>
        “User Content” means content that users have created and posted to the
        platform for others to view and comment on, including feedback,
        testimonials, and trade performance.
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, color: "#fff" }}>
        You represent and warrant that you own the User Content you post or
        have the legal right to post it. You are solely responsible for it.
        YoPips is not responsible for any User Content posted.
      </Typography>
      <Typography variant="body2" sx={{ color: "#fff" }}>
        YoPips may remove content that violates our guidelines, but we do not
        claim ownership over any User Content you provide.
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

export default TermsOfService;
