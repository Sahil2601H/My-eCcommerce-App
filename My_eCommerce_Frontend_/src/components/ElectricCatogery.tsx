import React from "react";
import { Box } from "@mui/material";
import ElectricCategoryCard from "./ElectricCatogerycard";
const imagePath = require("../asset ecom/laptop.jpg");
const imagePath2 = require("../asset ecom/Headphone.jpg");
const imagePath3 = require("../asset ecom/TV.jpg");
const imagePath4 = require("../asset ecom/phone2.jpg");
const imagePath5 = require("../asset ecom/washingmachine.jpg");
const imagePath6 = require("../asset ecom/Refrigerater.jpg");



 // Import the image properly

const electricItems = [
  { title: "Headphone", description: "High-quality wireless headphones.", image: imagePath2 },
  { title: "Mobile", description: "Latest smartphones with advanced features.", image: imagePath4 },
  { title: "Laptop", description: "Powerful laptops for work and gaming.", image: imagePath },
  { title: "TV", description: "Smart TVs with 4K resolution.", image: imagePath3 },
  { title: "Washing Machine", description: "Fully automatic washing machine.", image: imagePath5 },
  { title: "Refrigerator", description: "Energy-efficient double-door refrigerator.", image: imagePath6 },
];

const ElectricCategory: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px", padding: "20px" }}>
      {electricItems.map((item, index) => (
        <ElectricCategoryCard key={index} title={item.title} description={item.description} image={item.image} />
      ))}
    </Box>
  );
};

export default ElectricCategory;
