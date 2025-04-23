import React, { useState } from 'react';
import Filtersection from '/Users/Sahil/Desktop/App/app/src/Products/filtersection';
import Productcard from '/Users/Sahil/Desktop/App/app/src/Products/Productcard';
import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, useMediaQuery, useTheme, SelectChangeEvent, Divider } from '@mui/material';
import { FilterAlt } from '@mui/icons-material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Product() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const [age, setAge] = useState<string>('');
  const [page,setPage]=useState(1);
  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value);
  };

  const handlepageChange= (value:number)=>{

setPage(value)
  }

  return (
    <div style={{ width: '100%', marginTop: '40px' }}>
      {/* Page Title */}
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "36px", marginBottom: "20px" }}>
        Men's Wear
      </h1>
 <Divider/>
      {/* Main container (Flexbox for layout) */}
      <div style={{ display: 'flex', width: '100%', height: '100%',marginTop:'5px' }}>
        
        {/* Left Sidebar (Filtersection - 20%) */}
        <aside style={{ width: '20%', backgroundColor: '#fff', padding: '16px', height: '100%' ,border: '2px solid',
  borderImage: 'linear-gradient(to right, #ff7e5f, #feb47b) 1' }}>
          <Filtersection />
        </aside>
        
        {/* Right Content (Product Section - 80%) */}
        <main style={{ width: '80%', padding: '16px', backgroundColor: '#fff' }}>
          
          {/* Small screen filter button */}
          {!isLarge && (
            <div style={{ marginBottom: '16px' }}>
              <IconButton>
                <FilterAlt />
              </IconButton>
              <Box>
                <Filtersection />
              </Box>
            </div>
          )}

          {/* Select Dropdown (Reduced width) */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
  <FormControl style={{ width: '30%' }}>
    <InputLabel id="demo-simple-select-label">Age</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Age"
      onChange={handleChange}
    >
      <MenuItem value="10">Ten</MenuItem>
      <MenuItem value="20">Twenty</MenuItem>
      <MenuItem value="30">Thirty</MenuItem>
    </Select>
  </FormControl>
</div>

          {/* Product Section */}
          <section style={{ width: '100%', marginTop: '20px' }}>
            <Productcard />
          </section>
          <div className="flex justify-center items-center">
          <Pagination
          onChange={(e,value)=>handlepageChange(value)}
           count={10} shape="rounded"
           color='primary' />

            </div>
        </main>
      </div>
    </div>
  );
}

export default Product;
