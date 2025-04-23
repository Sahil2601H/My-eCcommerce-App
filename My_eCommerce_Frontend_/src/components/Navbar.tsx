import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  styled,
  TextField,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CategorySheet from "./CategorySheet";

const logo = require("C:/Users/Sahil/Desktop/App/app/src/asset ecom/logo-png.png");

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const categories = [
  { id: 1, name: "Men", subcategories: [{ name: "Clothing", subcategories: ["Shirts", "Pants", "Jackets"] }] },
  { id: 2, name: "Women", subcategories: [{ name: "Dresses", subcategories: ["Casual", "Party", "Formal"] }] },
  { id: 3, name: "Home & Furniture", subcategories: [{ name: "Sofas", subcategories: ["Leather", "Fabric"] }] },
  { id: 4, name: "Electronics", subcategories: [{ name: "Mobiles", subcategories: ["Smartphones", "Basic Phones"] }] },
];

// Styled button for category navigation
const CategoryButton = styled(Button)<{ selected?: boolean }>(({ selected }) => ({
  color: "white",
  fontWeight: selected ? "bold" : "normal",
  position: "relative",
  transition: "color 0.3s, background-color 0.3s, transform 0.3s",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#ffffff",
  },
}));

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [shouldClose, setShouldClose] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <>
      {/* Gradient Navbar */}
      <AppBar position="fixed" sx={{ background: "linear-gradient(to right, #2196F3, #1E88E5)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo & Categories */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="Logo" style={{ height: "55px", marginRight: "10px" }} />
            </Typography>

            {/* Category Buttons */}
            <Box sx={{ display: "flex", gap: "10px" }}>
              {categories.map((category) => (
                <CategoryButton
                  key={category.id}
                  selected={selectedCategory === category.name}
                  onMouseEnter={(event) => {
                    setSelectedCategory(category.name);
                    setAnchorEl(event.currentTarget);
                    setShouldClose(false);
                  }}
                  onMouseLeave={() => setShouldClose(true)}
                  onClick={() => navigate(`/products/${category.name.toLowerCase()}`)}
                >
                  {category.name}
                </CategoryButton>
              ))}
            </Box>
          </Box>

          {/* Search Box */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px", marginLeft: "auto" }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ backgroundColor: "white", borderRadius: "5px" }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" },
              }}
            >
              Search
            </Button>
          </Box>

          {/* Navbar Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <IconButton onClick={() => navigate("/cart")} sx={{ color: "white", transition: "0.3s" }}>
              <ShoppingCartIcon sx={{ fontSize: "28px" }} />
            </IconButton>
            <IconButton onClick={() => navigate("/account/profile")} sx={{ color: "white", transition: "0.3s" }}>
              <AccountCircleIcon sx={{ fontSize: "28px" }} />
            </IconButton>

            {/* Become a Seller Button */}
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "rgba(255, 255, 255, 0.6)",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#1E88E5",
                },
              }}
              onClick={() => navigate("/become-seller")}
            >
              Become a Seller
            </Button>

            <IconButton
              sx={{ color: "white", transition: "0.3s" }}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <LightModeIcon sx={{ fontSize: "28px" }} /> : <DarkModeIcon sx={{ fontSize: "28px" }} />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ paddingTop: "64px" }} />

      {/* CategorySheet */}
      <div
        onMouseEnter={() => setShouldClose(false)}
        onMouseLeave={() => setShouldClose(true)}
      >
        <CategorySheet
          anchorEl={anchorEl}
          handleClose={() => setShouldClose(true)}
          selectedCategory={selectedCategory}
          shouldClose={shouldClose}
        />
      </div>
    </>
  );
}

export default Navbar;
