import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

interface ElectricCategoryCardProps {
  title: string;
  description: string;
  image: string;
}

const ElectricCategoryCard: React.FC<ElectricCategoryCardProps> = ({ title, description, image }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Card
      sx={{
        width: 180,
        height: 310,
        border: "2px solid white",
        margin: "10px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "transform 0.3s, background-color 0.3s",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#e0e0e0",
          transform: "scale(1.05)",
        },
        ...(isClicked && {
          backgroundColor: "#d6d6d6",
        }),
      }}
      onClick={() => setIsClicked(!isClicked)}
    >
      {/* Image Container (Fixed Height) */}
      <Box
        sx={{
          width: "100%",
          height: "180px", // Fixed height to align all images
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Name & Description always at the bottom */}
      <CardContent sx={{ textAlign: "center", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ElectricCategoryCard;
