// import React, { useEffect, useState } from 'react';
// import Filtersection from './filtersection';
// import Productcard from './Productcard';
// import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, useMediaQuery, useTheme, SelectChangeEvent, Divider } from '@mui/material';
// import { FilterAlt } from '@mui/icons-material';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import { useAppDispatch } from '../State/Store';
// import { fetchAllProducts } from '../State/customer/ProductSlice';
// import { useParams } from 'react-router-dom';

// function Product() {
//   const theme = useTheme();
//   const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

//   const [searchParams, setsearchParams]=useState()

//   const dispatch=useAppDispatch()

//   const [age, setAge] = useState<string>('');
//   const [page,setPage]=useState(1);

//   const {categoryId}=useParams()

//   const handleChange = (event: SelectChangeEvent<string>) => {
//     setAge(event.target.value);
//   };

//   useEffect(
//     ()=>{

//       const[minPrice,maxPrice]= searchParams.get("price")?.split("-")|| [];

//       dispatch(fetchAllProducts({categoryId}))


//     },[categoryId]
//   )

//   const handlepageChange= (value:number)=>{

// setPage(value)
//   }

//   return (
//     <div style={{ width: '100%', marginTop: '40px' }}>
//       {/* Page Title */}
//       <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "36px", marginBottom: "20px" }}>
//         Men's Wear
//       </h1>
//  <Divider/>
//       {/* Main container (Flexbox for layout) */}
//       <div style={{ display: 'flex', width: '100%', height: '100%',marginTop:'5px' }}>
        
//         {/* Left Sidebar (Filtersection - 20%) */}
//         <aside style={{ width: '20%', backgroundColor: '#fff', padding: '16px', height: '100%' ,border: '2px solid',
//   borderImage: 'linear-gradient(to right,rgb(231, 229, 218),rgb(240, 224, 207)) 1' }}>
//           <Filtersection />
//         </aside>
        
//         {/* Right Content (Product Section - 80%) */}
//         <main style={{ width: '80%', padding: '16px', backgroundColor: '#fff' }}>
          
//           {/* Small screen filter button */}
//           {!isLarge && (
//             <div style={{ marginBottom: '16px' }}>
//               <IconButton>
//                 <FilterAlt />
//               </IconButton>
//               <Box>
//                 <Filtersection />
//               </Box>
//             </div>
//           )}

//           {/* Select Dropdown (Reduced width) */}
//           <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
//   <FormControl style={{ width: '30%' }}>
//     <InputLabel id="demo-simple-select-label">Age</InputLabel>
//     <Select
//       labelId="demo-simple-select-label"
//       id="demo-simple-select"
//       value={age}
//       label="Age"
//       onChange={handleChange}
//     >
//       <MenuItem value="10">Ten</MenuItem>
//       <MenuItem value="20">Twenty</MenuItem>
//       <MenuItem value="30">Thirty</MenuItem>
//     </Select>
//   </FormControl>
// </div>

//           {/* Product Section */}
//           <section style={{ width: '100%', marginTop: '20px' }}>
//             <Productcard />
            
//           </section>
//           <div className="flex justify-center items-center">
//           <Pagination
//           onChange={(e,value)=>handlepageChange(value)}
//            count={10} shape="rounded"
//            color='primary' />

//             </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Product;
// import React, { useEffect, useState } from 'react';
// import Filtersection from './filtersection';
// import Productcard from './Productcard';
// import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, useMediaQuery, useTheme, SelectChangeEvent, Divider } from '@mui/material';
// import { FilterAlt } from '@mui/icons-material';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import store, { useAppDispatch, useAppSelector } from '../State/Store';
// import { fetchAllProducts } from '../State/customer/ProductSlice';
// import { useParams, useSearchParams } from 'react-router-dom';

// function Product() {
//   const theme = useTheme();
//   const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
//   const [searchParams] = useSearchParams(); // Proper way to get URL params
//   const dispatch = useAppDispatch();
//   const [sortOption, setSortOption] = useState<string>('');
//   const [page, setPage] = useState(1);
//   const { category } = useParams();



//   const handleSortChange = (event: SelectChangeEvent<string>) => {
//     setSortOption(event.target.value);
//   };

//   // useEffect(() => {
//   //   const [minPrice, maxPrice] = searchParams.get("price")?.split("-") || [];
//   //   const filters = {
//   //     categoryId,
//   //     minPrice,
//   //     maxPrice,
//   //     sort: sortOption,
//   //     page
//   //   };
//   //   dispatch(fetchAllProducts(filters));
//   // }, [categoryId, searchParams, sortOption, page, dispatch]);

// useEffect(()=>{
//   const[minPrice,maxPrice]=searchParams.get("price")?.split("-")||[]
//   dispatch(fetchAllProducts({}))
// },[])


//   const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
//     setPage(value);
//   };

//   return (
//     <div style={{ width: '100%', marginTop: '40px' }}>
//       <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "36px", marginBottom: "20px" }}>
//         Men's Wear
//       </h1>
//       <Divider/>
      
//       <div style={{ display: 'flex', width: '100%', height: '100%', marginTop: '5px' }}>
//         <aside style={{ width: '20%', backgroundColor: '#fff', padding: '16px', height: '100%', border: '2px solid',
//           borderImage: 'linear-gradient(to right,rgb(231, 229, 218),rgb(240, 224, 207)) 1' }}>
//           <Filtersection />
//         </aside>
        
//         <main style={{ width: '80%', padding: '16px', backgroundColor: '#fff' }}>
//           {!isLarge && (
//             <div style={{ marginBottom: '16px' }}>
//               <IconButton>
//                 <FilterAlt />
//               </IconButton>
//               <Box>
//                 <Filtersection />
//               </Box>
//             </div>
//           )}

//           <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
//             <FormControl style={{ width: '30%' }}>
//               <InputLabel id="sort-select-label">Sort By</InputLabel>
//               <Select
//                 labelId="sort-select-label"
//                 id="sort-select"
//                 value={sortOption}
//                 label="Sort By"
//                 onChange={handleSortChange}
//               >
//                 <MenuItem value="price_asc">Price: Low to High</MenuItem>
//                 <MenuItem value="price_desc">Price: High to Low</MenuItem>
//                 <MenuItem value="newest">Newest Arrivals</MenuItem>
//               </Select>
//             </FormControl>
//           </div>

//           <section style={{ width: '100%', marginTop: '20px' }}>
//                         <Productcard />
//           </section>
          
//           <div className="flex justify-center items-center">
//             <Pagination
//               onChange={handlePageChange}
//               count={10}
//               shape="rounded"
//               color="primary"
//             />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Product;

import React, { useEffect, useState } from 'react';
import { 
  Box, 
  FormControl, 
  IconButton, 
  InputLabel, 
  MenuItem, 
  Select, 
  useMediaQuery, 
  useTheme, 
  SelectChangeEvent, 
  Divider,
  CircularProgress,
  Alert,
  Grid,
  Pagination,
  Typography
} from '@mui/material';
import { FilterAlt } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../State/Store';
import { fetchAllProducts } from '../State/customer/ProductSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from './Productcard'; // This will be your product card component
import FilterSection from './filtersection';

function Product() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const [sortOption, setSortOption] = useState<string>('');
  const [page, setPage] = useState(1);
  const { category } = useParams();

  const { 
    products = [], // Default to empty array if undefined
    loading, 
    error, 
    totalPages = 1 // Default to 1 if undefined
  } = useAppSelector((state) => state.product);

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortOption(event.target.value);
    setPage(1); // Reset to first page when sorting changes
  };

  useEffect(() => {
    const [minPrice, maxPrice] = searchParams.get("price")?.split("-") || [];
    
    const filters = {
      category,
      minPrice: minPrice ? parseInt(minPrice) : undefined,
      maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
      sort: sortOption || undefined,
      pageNumber: page - 1
    };

    dispatch(fetchAllProducts(filters));
  }, [category, searchParams, sortOption, page, dispatch]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <h1 style={{ fontWeight: "bold", fontSize: "36px" }}>
          {category ? `${category.replace('-', ' ')}` : 'All Products'}
        </h1>
        <Divider />
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ display: 'flex', width: '100%' }}>
        {/* Filters Section */}
        {isLarge && (
          <Box sx={{ width: '25%', p: 2 }}>
            {/* Your Filtersection component */}
            <FilterSection />
          </Box>
        )}

        {/* Main Content */}
        <Box sx={{ width: isLarge ? '75%' : '100%', p: 2 }}>
          {/* Mobile Filter Button */}
          {!isLarge && (
            <Box sx={{ mb: 2 }}>
              <IconButton>
                <FilterAlt />
              </IconButton>
              {/* Mobile Filters */}
              {/* <Filtersection /> */}
            </Box>
          )}

          {/* Sort Dropdown */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <FormControl sx={{ width: isLarge ? '30%' : '50%' }}>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortOption}
                label="Sort By"
                onChange={handleSortChange}
                disabled={loading}
              >
                <MenuItem value="">Default</MenuItem>
                <MenuItem value="price_asc">Price: Low to High</MenuItem>
                <MenuItem value="price_desc">Price: High to Low</MenuItem>
                <MenuItem value="newest">Newest Arrivals</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Loading Indicator */}
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
              <CircularProgress />
            </Box>
          ) : (
            <>
              {/* Product Grid */}
              <Grid container spacing={3}>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))
      ) : (
        !loading && (
          <Box sx={{ width: '100%', textAlign: 'center', p: 4 }}>
            <Typography variant="h6">No products found</Typography>
          </Box>
        )
      )}
    </Grid>

              {/* Pagination */}
              {totalPages > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                    disabled={loading}
                  />
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Product;