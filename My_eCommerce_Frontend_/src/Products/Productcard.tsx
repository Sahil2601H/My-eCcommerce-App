// import { useState } from "react";

// // Define Product Interface
// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   description: string;
//   rating: number;
//   images: string[];
//   sizes: string[];
//   trending?: boolean;
// }

// // Dummy product data
// const products: Product[] = [
  
//     {
//       id: 1,
//       name: "Men's Stylish Shirt",
//       price: "$39.99",
//       description: "A stylish casual shirt perfect for any occasion.",
//       rating: 4.5,
//       images: [
//         "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQb0bbxICbDy6XxBfAFBOAH8RmbFzU3cUbtczUtbftQpSkQe-i37nX6Cv0gTDuyes7gURZcZ3OY96xc_0huqjUzkgQGTthe4l0uKZQczLY"
//       ],
//       sizes: ["S", "M", "L", "XL"],
//     },
//     {
//       id: 2,
//       name: "Casual Denim Shirt",
//       price: "$45.99",
//       description: "A durable denim shirt for a casual yet stylish look.",
//       rating: 4.2,
//       images: [
//         "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTyjQAe8C5ZoSbe6Wck0yHzleYdMBQpa-EJU5SXargT3mcNvYp-99TMXae5pioKGFM1CMAkznLXraYbYscD2blh0-eJtnm-mA"
//       ],
//       sizes: ["M", "L", "XL"],
//       trending: true,
//     },
//     {
//       id: 3,
//       name: "Formal Office Shirt",
//       price: "$49.99",
//       description: "A perfect formal shirt for office and meetings.",
//       rating: 4.8,
//       images: [
//         "https://images.bewakoof.com/t640/men-s-grey-oversized-shirt-649873-1740573902-1.jpg"
//       ],
//       sizes: ["S", "M", "L", "XL", "XXL"],
//       trending: true,
//     },
//     {
//       id: 4,
//       name: "Slim Fit Casual Shirt",
//       price: "$42.99",
//       description: "A trendy slim fit casual shirt for a smart look.",
//       rating: 4.3,
//       images: [
//         "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRj_stnAWf7nqtWGrrK5w0EKgQx6pq55s2qI4cP76EkjKv5_OhMVgwboeKANU7_RAI3fE0KoL0mEY4asXzZUB08JMYsEtdA"
//       ],
//       sizes: ["S", "M", "L"],
//     },
//     {
//       id: 5,
//       name: "Casual Cotton Shirt",
//       price: "$37.99",
//       description: "A breathable cotton shirt perfect for summer.",
//       rating: 4.1,
//       images: [
//         "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ3s8UlbgiSm_jnlSp9j7vzGc7WUIMP79wrRI2gren8JU-mQlwNGFz2ymTVuc4eacjT1J3PP2pM1-QIkTHufcxZQUyAKbd7wdXTpASzBAkBUsFCMby3tP7G"
//       ],
//       sizes: ["M", "L", "XL"],
//     },
//     {
//       id: 6,
//       name: "Linen Blend Shirt",
//       price: "$44.99",
//       description: "A lightweight linen blend shirt for casual and formal wear.",
//       rating: 4.4,
//       images: [
//         "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6jiRfTrsGgiOCLqLV20PNFVdWJp5lmFIleGx4U9A4j53-4ep7M83zZdX9qcK_FUndOwDFsFUoiAUfPnnEum5_mtbFkNdPjdfTURT4aHe_iNdFUL-AIuE_uA"
//       ],
//       sizes: ["S", "M", "L", "XL"],
//     },
//     {
//       id: 7,
//       name: "Cotton Blend Casual Shirt",
//       price: "$38.99",
//       description: "A comfortable cotton blend shirt for everyday wear.",
//       rating: 4.2,
//       images: [
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJOdOLvrL2BRFq4KXY8szbJcoBBuJncer-SGTnGT4L1zb8KawEU65zdY&s"
//       ],
//       sizes: ["M", "L", "XL"],
//     },
//     {
//       id: 8,
//       name: "Cotton Blend Casual Shirt",
//       price: "$38.99",
//       description: "A comfortable cotton blend shirt for everyday wear.",
//       rating: 4.2,
//       images: [
//         "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6pRWuSjwrbiI9s2VwSuUW1t4Gob7LnrZRrsDBwfbEnWfo6uLU8we3YKjxi1cpWkbHBmabbsTnM993gz9eYuK23Vf700CbSbT2M-7UnrCIVcDC4A2vJDDzG1YIrG_s6RHT7wE_Xc8e8bc&usqp=CAc"
//       ],
//       sizes: ["M", "L", "XL"],
//     }

//   ];


// const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
//   const [currentImage, setCurrentImage] = useState<number>(0);

//   const handleDotClick = (index: number) => {
//     setCurrentImage(index);
//   };

//   return (
//     <div className="w-64 bg-white shadow-lg border border-gray-300 overflow-hidden p-4 relative flex flex-col min-h-full">
//       {/* Trending Label */}
//       {product.trending && (
//         <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
//           Trending
//         </span>
//       )}

//       {/* Image Container */}
//       <div className="relative w-full h-52 flex items-center justify-center bg-gray-100 border border-gray-400 p-3">
//         <img
//           key={product.images[currentImage]}
//           src={product.images[currentImage]}
//           alt="Product"
//           className="w-48 h-48 object-contain mx-auto transition-opacity duration-500 ease-in-out"
//         />
//       </div>

//       {/* Dot Indicators */}
//       <div className="flex justify-center mt-2">
//         {product.images.map((_, index: number) => (
//           <span
//             key={index}
//             className={`h-2.5 w-2.5 mx-1 rounded-full cursor-pointer transition-all duration-300 border border-gray-400 ${
//               index === currentImage ? "bg-white shadow-md" : "bg-gray-300"
//             }`}
//             onClick={() => handleDotClick(index)}
//           ></span>
//         ))}
//       </div>

//       {/* Product Info */}
//       <div className="p-3 flex-grow">
//         <h2 className="text-sm font-semibold">{product.name}</h2>
//         <p className="text-md font-bold mt-1">{product.price}</p>
//         <p className="text-xs text-gray-600 mt-1">{product.description}</p>

//         {/* Rating */}
//         <div className="flex items-center mt-1">
//           {[...Array(5)].map((_, i) => (
//             <span
//               key={i}
//               className={`text-yellow-500 text-xs ${
//                 i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"
//               }`}
//             >
//               ★
//             </span>
//           ))}
//           <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
//         </div>

//         {/* Available Sizes */}
//         <div className="mt-2 flex flex-wrap gap-2">
//           {product.sizes.map((size, index) => (
//             <span
//               key={index}
//               className="px-2 py-1 border border-gray-400 text-xs font-semibold"
//             >
//               {size}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductList: React.FC = () => {
//   return (
//     <div
//   className="flex flex-wrap justify-center gap-4 p-4"
//   style={{
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     maxWidth: "1200px", // Ensures 4 cards fit on large screens
//     margin: "0 auto", // Centers the grid
//   }}
// >
//   {products.map((product) => (
//     <div
//       key={product.id}
//       style={{
//         width: "calc(25% - 16px)", // Ensures exactly 4 per row
//         minWidth: "240px", // Prevents excessive shrinking
//         maxWidth: "256px", // Matches w-64
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "stretch", // Ensures all cards align properly
//       }}
//     >
//       <ProductCard product={product} />
//     </div>
//   ))}
// </div>

  
//   );
// };

// export default ProductList;
//code2:
// import React, { useState } from 'react';
// import { 
//   Card, 
//   CardMedia, 
//   CardContent, 
//   Typography, 
//   Box, 
//   Rating, 
//   Chip,
//   IconButton 
// } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// interface ProductCardProps {
//   product: {
//     id: number | string;
//     name: string;
//     price?: number | string;
//     description?: string;
//     rating?: number;
//     images?: string[];  // Made optional
//     sizes?: string[];   // Made optional
//     trending?: boolean;
//   };
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const [currentImage, setCurrentImage] = useState(0);

//   // Safe price formatting
//   const formatPrice = (price?: number | string) => {
//     if (price === undefined || price === null) return '$0.00';
    
//     if (typeof price === 'string') {
//       const numericValue = parseFloat(price.replace(/[^0-9.]/g, ''));
//       return `$${isNaN(numericValue) ? '0.00' : numericValue.toFixed(2)}`;
//     }
    
//     return `$${price.toFixed(2)}`;
//   };

//   // Safe image handling
//   const productImages = Array.isArray(product.images) ? product.images : [];
//   const currentImageUrl = productImages[currentImage] || '';

//   // Safe sizes handling
//   const productSizes = Array.isArray(product.sizes) ? product.sizes : [];

//   return (
//     <Card sx={{ 
//       height: '100%', 
//       display: 'flex', 
//       flexDirection: 'column',
//       transition: 'transform 0.3s',
//       '&:hover': {
//         transform: 'scale(1.02)',
//         boxShadow: 3
//       }
//     }}>
//       {product.trending && (
//         <Chip 
//           label="Trending" 
//           color="error" 
//           size="small" 
//           sx={{ 
//             position: 'absolute', 
//             top: 8, 
//             left: 8,
//             zIndex: 1
//           }} 
//         />
//       )}

//       <Box sx={{ position: 'relative', pt: '100%' }}>
//         <CardMedia
//           component="img"
//           image={currentImageUrl}
//           alt={product.name}
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             objectFit: 'contain',
//             p: 2,
//             backgroundColor: productImages.length ? 'transparent' : '#f5f5f5'
//           }}
//         />
//       </Box>

//       {/* Dot Indicators - only show if multiple images */}
//       {productImages.length > 1 && (
//         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
//           {productImages.map((_, index) => (
//             <Box
//               key={index}
//               sx={{
//                 width: 8,
//                 height: 8,
//                 mx: 0.5,
//                 borderRadius: '50%',
//                 bgcolor: index === currentImage ? 'primary.main' : 'grey.400',
//                 cursor: 'pointer'
//               }}
//               onClick={() => setCurrentImage(index)}
//             />
//           ))}
//         </Box>
//       )}

//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography gutterBottom variant="h6" component="div" noWrap>
//           {product.name}
//         </Typography>
//         <Typography variant="h6" color="text.primary">
//           {formatPrice(product.price)}
//         </Typography>
        
//         {product.description && (
//           <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//             {product.description}
//           </Typography>
//         )}

//         {product.rating && (
//           <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
//             <Rating 
//               value={product.rating} 
//               precision={0.5} 
//               readOnly 
//               size="small" 
//             />
//             <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
//               ({product.rating})
//             </Typography>
//           </Box>
//         )}

//         {/* Sizes - only show if sizes exist */}
//         {productSizes.length > 0 && (
//           <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//             {productSizes.map((size, index) => (
//               <Chip 
//                 key={`${size}-${index}`} 
//                 label={size} 
//                 size="small" 
//                 variant="outlined" 
//               />
//             ))}
//           </Box>
//         )}
//       </CardContent>

//       <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
//         <IconButton aria-label="add to favorites">
//           <FavoriteBorderIcon />
//         </IconButton>
//         <IconButton aria-label="add to cart" color="primary">
//           <ShoppingCartIcon />
//         </IconButton>
//       </Box>
//     </Card>
//   );
// };

// export default ProductCard;

// import React, { useState } from 'react';
// import { 
//   Card, 
//   CardMedia, 
//   CardContent, 
//   Typography, 
//   Box, 
//   Chip,
//   IconButton 
// } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// interface ProductCardProps {
//   product: {
//     title: string;
//     description: string;
//     color: string;
//     mrpPrice: number;
//     sellingPrice: number;
//     discountPercent:number;
//     images: string[];
//     sizes: string;
//     category: string;
//   };
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const formatPrice = (price: number) => {
//     return `$${price.toFixed(2)}`;
//   };

//   const productImages = Array.isArray(product.images) ? product.images : [];
//   const currentImageUrl = productImages[currentImage] || '';

//   const sizeList = product.sizes ? product.sizes.split(',') : [];

//   return (
//     <Card sx={{ 
//       height: '100%', 
//       display: 'flex', 
//       flexDirection: 'column',
//       transition: 'transform 0.3s',
//       '&:hover': {
//         transform: 'scale(1.02)',
//         boxShadow: 3
//       }
//     }}>
//       <Box sx={{ position: 'relative', pt: '100%' }}>
//         <CardMedia
//           component="img"
//           image={currentImageUrl}
//           alt={product.title}
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             objectFit: 'contain',
//             p: 2,
//             backgroundColor: productImages.length ? 'transparent' : '#f5f5f5'
//           }}
//         />
//       </Box>

//       {productImages.length > 1 && (
//         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
//           {productImages.map((_, index) => (
//             <Box
//               key={index}
//               sx={{
//                 width: 8,
//                 height: 8,
//                 mx: 0.5,
//                 borderRadius: '50%',
//                 bgcolor: index === currentImage ? 'primary.main' : 'grey.400',
//                 cursor: 'pointer'
//               }}
//               onClick={() => setCurrentImage(index)}
//             />
//           ))}
//         </Box>
//       )}

//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography gutterBottom variant="h6" component="div" noWrap>
//           {product.title}
//         </Typography>

//         <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//           {product.description}
//         </Typography>

//         <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//           Color: {product.color}
//         </Typography>

       

//         <Typography variant="body2" sx={{ mt: 1 }}>
//           <strong>MRP:</strong> {formatPrice(product.mrpPrice)}
//         </Typography>

//         <Typography variant="body2" sx={{ mt: 1 }}>
//           <strong></strong> {product.discountPercent} <strong> % off</strong>
//         </Typography>
         
         

//         <Typography variant="body2">
//           <strong>Selling Price:</strong> {formatPrice(product.sellingPrice)}
//         </Typography>

//         {sizeList.length > 0 && (
//           <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//             {sizeList.map((size, index) => (
//               <Chip 
//                 key={`${size}-${index}`} 
//                 label={size.trim()} 
//                 size="small" 
//                 variant="outlined" 
//               />
//             ))}
//           </Box>
//         )}
//       </CardContent>

//       <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
//         <IconButton aria-label="add to favorites">
//           <FavoriteBorderIcon />
//         </IconButton>
//         <IconButton aria-label="add to cart" color="primary">
//           <ShoppingCartIcon />
//         </IconButton>
//       </Box>
//     </Card>
//   );
// };

// export default ProductCard;

import React, { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Box, 
  Chip, 
  IconButton 
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: number | string;               // ← added
    title: string;
    description: string;
    color: string;
    mrpPrice: number;
    sellingPrice: number;
    discountPercent: number;
    images: string[];
    sizes: string;
    category: {
      categoryId: number | string;     // ← explicit keys used in onClick
      name: string;
      parentCategory?: string;
      level?: number;
    };
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

const navigate=useNavigate()

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;
  const productImages = Array.isArray(product.images) ? product.images : [];
  const currentImageUrl = productImages[currentImage] || '';
  const sizeList = product.sizes ? product.sizes.split(',') : [];

  return (
    <Card
   
    onClick = {()=>navigate(`/product-details/${product.category?.categoryId}/${product.title}/${product.id}`)}
    
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ position: 'relative', pt: '100%' }}>
        <CardMedia
          component="img"
          image={currentImageUrl}
          alt={product.title}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            p: 2,
            backgroundColor: productImages.length ? 'transparent' : '#f5f5f5',
          }}
        />
      </Box>

      {productImages.length > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          {productImages.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                mx: 0.5,
                borderRadius: '50%',
                bgcolor: index === currentImage ? 'primary.main' : 'grey.400',
                cursor: 'pointer',
              }}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1, px: 2, pt: 2 }}>
        <Typography gutterBottom variant="h6" fontWeight="bold" noWrap>
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {product.description}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          <strong>Color:</strong> {product.color}
        </Typography>

        <Box sx={{ mt: 1 }}>
          <Typography
            variant="body2"
            sx={{
              textDecoration: 'line-through',
              color: 'text.disabled',
              display: 'inline-block',
              mr: 1,
            }}
          >
            {formatPrice(product.mrpPrice)}
          </Typography>

          <Typography
            variant="body2"
            component="span"
            sx={{
              color: 'orange',
              fontWeight: 'bold',
            }}
          >
            {product.discountPercent}% OFF
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ mt: 0.5, fontWeight: 'bold' }}>
          <strong>Selling Price:</strong> {formatPrice(product.sellingPrice)}
        </Typography>

        {sizeList.length > 0 && (
          <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {sizeList.map((size, index) => (
              <Chip
                key={`${size}-${index}`}
                label={size.trim()}
                size="small"
                variant="outlined"
              />
            ))}
          </Box>
        )}
      </CardContent>

      <Box sx={{ p: 1.5, px: 2, display: 'flex', justifyContent: 'space-between' }}>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="add to cart" color="primary">
          <ShoppingCartIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default ProductCard;

