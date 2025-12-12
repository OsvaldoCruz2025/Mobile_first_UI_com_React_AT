import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#141414",
        color: "white",
        textAlign: "center",
        padding: "30px 0",
        mt: 4,
      }}
    >
      <Typography variant="body1" sx={{ mb: 2 }}>
        © 2025 Netflix Clone — Projeto React
      </Typography>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
    </Box>
  );
}

export default Footer;
