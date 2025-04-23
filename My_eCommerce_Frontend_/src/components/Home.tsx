import React from "react";
import { Box, Typography } from "@mui/material";
import ElectricCategory from "./ElectricCatogery";

const Home: React.FC = () => {
  return (
    <Box sx={{ marginTop: "-2px", padding: "20px" }}>  
    <h1 style={{ textAlign: "center", fontWeight: "bold" , fontSize: "36px" }}>
  Explore Electric Category
</h1>
    {/* Space below Navbar */}
      {/* <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>
        Explore Electric Categories
      </Typography> */}
      <ElectricCategory />
    </Box>
  );
};

export default Home;
