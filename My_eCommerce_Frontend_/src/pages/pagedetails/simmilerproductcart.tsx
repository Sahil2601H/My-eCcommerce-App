import React from 'react'



import { useState } from "react";

// Define Product Interface
interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  rating: number;
  images: string[];
  sizes: string[];
  trending?: boolean;
}

// Dummy product data
const products: Product[] = [
  {
    id: 1,
    name: "Men's Stylish Shirt",
    price: "$39.99",
    description: "A stylish casual shirt perfect for any occasion.",
    rating: 4.5,
    images: [
      require("../asset ecom/Mens/Mens_shirt_1.jpg"),
      require("../asset ecom/Mens/Mens_shirt_1.2.jpg"),
      require("../asset ecom/Mens/Mens_shirt_1.3.jpg"),
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Casual Denim Shirt",
    price: "$45.99",
    description: "A durable denim shirt for a casual yet stylish look.",
    rating: 4.2,
    images: [
      require("../asset ecom/Mens/Mens_shirt_1.jpg"),
      require("../asset ecom/Mens/Mens_shirt_1.2.jpg"),
      require("../asset ecom/Mens/Mens_shirt_1.3.jpg"),
    ],
    sizes: ["M", "L", "XL"],
    trending: true,
  },
  {
    id: 3,
    name: "Formal Office Shirt",
    price: "$49.99",
    description: "A perfect formal shirt for office and meetings.",
    rating: 4.8,
    images: [
      require("../asset ecom/Mens/Mens_shirt_1.jpg"),
      require("../asset ecom/Mens/Mens_shirt_1.2.jpg"),
      require("../asset ecom/Mens/Mens_shirt_1.3.jpg"),
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    trending: true,
  },
  {
    id: 4,
    name: "Slim Fit Casual Shirt",
    price: "$42.99",
    description: "A trendy slim fit casual shirt for a smart look.",
    rating: 4.3,
    images: [
      require("../asset ecom/Mens/Mens_shirt_1.jpg"),
      require("../asset ecom/Mens/Mens_shirt_1.2.jpg"),
      require("../asset ecom/Mens/Mens_shirt_1.3.jpg"),
    ],
    sizes: ["S", "M", "L"],
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleDotClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="w-64 bg-white shadow-lg border border-gray-300 overflow-hidden p-4 relative flex flex-col min-h-full">
      {/* Trending Label */}
      {product.trending && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
          Trending
        </span>
      )}

      {/* Image Container */}
      <div className="relative w-full h-52 flex items-center justify-center bg-gray-100 border border-gray-400 p-3">
        <img
          key={product.images[currentImage]}
          src={product.images[currentImage]}
          alt="Product"
          className="w-44 h-44 object-contain mx-auto transition-opacity duration-500 ease-in-out"
        />
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-2">
        {product.images.map((_, index: number) => (
          <span
            key={index}
            className={`h-2.5 w-2.5 mx-1 rounded-full cursor-pointer transition-all duration-300 border border-gray-400 ${
              index === currentImage ? "bg-white shadow-md" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>

      {/* Product Info */}
      <div className="p-3 flex-grow">
        <h2 className="text-sm font-semibold">{product.name}</h2>
        <p className="text-md font-bold mt-1">{product.price}</p>
        <p className="text-xs text-gray-600 mt-1">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-yellow-500 text-xs ${
                i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>

        {/* Available Sizes */}
        <div className="mt-2 flex flex-wrap gap-2">
          {product.sizes.map((size, index) => (
            <span
              key={index}
              className="px-2 py-1 border border-gray-400 text-xs font-semibold"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductList: React.FC = () => {
  return (
    <div
  className="flex flex-wrap justify-center gap-4 p-4"
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1200px", // Ensures 4 cards fit on large screens
    margin: "0 auto", // Centers the grid
  }}
>
  {products.map((product) => (
    <div
      key={product.id}
      style={{
        width: "calc(25% - 16px)", // Ensures exactly 4 per row
        minWidth: "240px", // Prevents excessive shrinking
        maxWidth: "256px", // Matches w-64
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch", // Ensures all cards align properly
      }}
    >
      <ProductCard product={product} />
    </div>
  ))}
</div>

  
  );
};

export default ProductList;