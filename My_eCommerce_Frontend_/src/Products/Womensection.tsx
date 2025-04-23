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

// Women's Sari product data
const products: Product[] = [
    {
        "id": 1,
        "name": "Elegant Silk Sari",
        "price": "$89.99",
        "description": "A beautifully woven silk sari perfect for festive occasions.",
        "rating": 4.7,
        "images": [
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjxR5oFrmFq57V22k5wKWCQbDQUZWI470GjGnTl9kFVjp3MTlERxJmUWHrw7VstMDFxoCotpcZsPHj8nyv8m94whVJOftZ_DdA6xkKQSpJn9Gck7e4__YC&usqp=CAc"
        ],
        "sizes": ["Free Size"],
        "trending": true
      },
      {
        "id": 2,
        "name": "Designer Cotton Sari",
        "price": "$79.99",
        "description": "A comfortable and stylish cotton sari for everyday wear.",
        "rating": 4.5,
        "images": [
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvBHhKhfFtlegfu3L71PuTW6CxV49P1z-eNTaAb-dZsf08sv-timWt6bI-L5KzGz3lOqqOkiqf-o444Ywm8oaj6PyGT2wiee0PbJMLxiiS6jm5rAbevbu2zS4&usqp=CAc"
        ],
        "sizes": ["Free Size"]
      },
      {
        "id": 3,
        "name": "Traditional Banarasi Sari",
        "price": "$99.99",
        "description": "A classic Banarasi sari with intricate golden embroidery.",
        "rating": 4.8,
        "images": [
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSNmvaagGVowCc6ecbcsqLQtPKwP1tPNR9b7Q9D3TMDzO_tVY5zZO7eX2Fc4AMHjepF9GQktpbcgxdmztoPQMLkVVsUHynNtMfW8liPSeZ_6Qh_3MBIkpXt&usqp=CAc"
        ],
        "sizes": ["Free Size"],
        "trending": true
      },
      {
        "id": 4,
        "name": "Royal Kanjivaram Sari",
        "price": "$129.99",
        "description": "A luxurious Kanjivaram sari woven with fine silk and zari work.",
        "rating": 4.9,
        "images": [
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRYFXUULm90fEytovYhPfDTiCvOmlit3xqIoqH48zSSaA0wabK6vFJyknlXaXdBtbZvZXJl7Y5PSo_HNUJESNRyoSimfvPdgV7qwDQa_W8mA1EPJkRKjR5j"
        ],
        "sizes": ["Free Size"]
      },
      {
        "id": 5,
        "name": "Chiffon Partywear Sari",
        "price": "$59.99",
        "description": "A lightweight and elegant chiffon sari, perfect for parties.",
        "rating": 4.3,
        "images": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBXxw6VmxhPGWcnUgV9n3fQwoJtx4Pct08rg&s"
        ],
        "sizes": ["Small", "Medium", "Large"]
      },
      {
        "id": 6,
        "name": "Georgette Printed Sari",
        "price": "$49.99",
        "description": "A stylish printed georgette sari for casual outings.",
        "rating": 4.2,
        "images": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OuqpGB-culJIlG_PdfPC807Fnwq1dHhI1JBRBXWWtSuC3XYVo4UOwZI&s"
        ],
        "sizes": ["Small", "Medium", "Large"]
      },
      {
        "id": 7,
        "name": "Classic Handloom Sari",
        "price": "$109.99",
        "description": "A premium handloom sari made with intricate craftsmanship.",
        "rating": 4.6,
        "images": [
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR7y3HBu5JirERnZLa-WWL4wac90hBjo7vxEB85AfXx4BoCXZnU39JNMVjYPDZibtHLTPHzJrvKA3omfyu-32szjlz8fhfzIUD1xYNZO-66JmWbdaTKA6jE"
        ],
        "sizes": ["Free Size"],
        "trending": true
      },
      {
        "id": 8,
        "name": "Embroidered Net Sari",
        "price": "$69.99",
        "description": "A delicate net sari with elegant embroidery, perfect for weddings.",
        "rating": 4.4,
        "images": [
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrJazgoJGFN7REoYPSIjihW-pbw-telY3WOfhvT_vIBduvyv8dWfArcki8Qar6uDqQcjGAsYtsPjG2QlVA6W5IK51ydaCrTxI0_e40gAUvvH6FmS9gRvkz"
        ],
        "sizes": ["Free Size"]
      }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <div className="w-64 bg-white shadow-lg border border-gray-300 overflow-hidden p-4 relative flex flex-col min-h-full">
      {product.trending && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
          Trending
        </span>
      )}
      <div className="relative w-full h-52 flex items-center justify-center bg-gray-100 border border-gray-400 p-3">
        <img
          src={product.images[currentImage]}
          alt="Product"
          className="w-48 h-48 object-contain mx-auto"
        />
      </div>
      <div className="p-3 flex-grow">
        <h2 className="text-sm font-semibold">{product.name}</h2>
        <p className="text-md font-bold mt-1">{product.price}</p>
        <p className="text-xs text-gray-600 mt-1">{product.description}</p>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xs ${i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"}`}
            >
              ★
            </span>
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {product.sizes.map((size, index) => (
            <span key={index} className="px-2 py-1 border border-gray-400 text-xs font-semibold">
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
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
