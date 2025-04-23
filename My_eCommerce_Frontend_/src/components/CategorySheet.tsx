import React from "react";
import { Box, Typography } from "@mui/material";

interface CategorySheetProps {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  selectedCategory: string | null;
  shouldClose: boolean;
}

const categories = [
  {
    id: 1,
    name: "Men",
    subcategories: [
      { name: "Clothing", subcategories: ["Shirts", "Pants", "Jackets"] },
      { name: "Shoes", subcategories: ["Sneakers", "Boots", "Sandals"] },
    ],
  },
  {
    id: 2,
    name: "Women",
    subcategories: [
      { name: "Dresses", subcategories: ["Casual", "Party", "Formal"] },
      { name: "Bags", subcategories: ["Handbags", "Backpacks", "Clutches"] },
    ],
  },
  {
    id: 3,
    name: "Home & Furniture",
    subcategories: [
      { name: "Sofas", subcategories: ["Leather", "Fabric", "Corner"] },
      { name: "Beds", subcategories: ["Single", "Double", "Queen"] },
    ],
  },
  {
    id: 4,
    name: "Electronics",
    subcategories: [
      { name: "Mobiles", subcategories: ["Smartphones", "Basic Phones"] },
      { name: "Laptops", subcategories: ["Gaming", "Work", "Ultrabook"] },
    ],
  },
];

const CategorySheet: React.FC<CategorySheetProps> = ({
  anchorEl,
  handleClose,
  selectedCategory,
  shouldClose,
}) => {
  const category = categories.find((c) => c.name === selectedCategory);
  if (!category || shouldClose) return null;

  // Calculate the menu position based on the anchor element's position.
  const menuPosition = anchorEl
    ? {
        top: anchorEl.getBoundingClientRect().bottom + window.scrollY, // Just below the button
        left: anchorEl.getBoundingClientRect().left, // Align with the button’s left edge
      }
    : { top: 0, left: 0 };

  return (
    <Box
      sx={{
        position: "absolute",
        top: menuPosition.top,
        left: menuPosition.left,
        width: "50%", // Adjust width as needed
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        padding: "20px",
        overflowY: "auto",
        transition: "all 0.3s ease-in-out", // Smooth transition
        zIndex: 1300,
      }}
    >
      {/* Category content */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {category.name}
      </Typography>

      {/* Level 2 Subcategories */}
      {category.subcategories.map((subCategory, index) => (
        <Box key={index} sx={{ marginBottom: "20px" }}>
          <Typography variant="h5" fontWeight="bold">
            {subCategory.name}
          </Typography>
          {/* Level 3 Sub-Subcategories */}
          <Box sx={{ marginLeft: "20px" }}>
            {subCategory.subcategories.map((subSubCategory, idx) => (
              <Typography key={idx} variant="body1">
                {subSubCategory}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CategorySheet;
