import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/netflix_logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleDrawer = (open) => () => setMenuOpen(open);
  const menuItems = ["Início", "Séries", "Filmes", "Populares"];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        {/* LOGO */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src={logo}
            alt="Netflix Logo"
            style={{
              width: "250px", 
              height: "auto",
              cursor: "pointer",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            Filmes & Séries
          </Typography>
        </Box>

        {/* MENU DESKTOP */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
          }}
        >
          {menuItems.map((item) => (
            <Button key={item} color="inherit">
              {item}
            </Button>
          ))}
        </Box>

        {/* MENU MOBILE */}
        <IconButton
          color="inherit"
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* DRAWER MOBILE */}
        <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
              backgroundColor: "#141414",
              color: "white",
              height: "100%",
              paddingTop: "20px",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}
            >
              Menu
            </Typography>
            <List>
              {menuItems.map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: 4,
              }}
            >
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </Box>
          </Box>
        </Drawer>

        {/* REDES SOCIAIS DESKTOP */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
