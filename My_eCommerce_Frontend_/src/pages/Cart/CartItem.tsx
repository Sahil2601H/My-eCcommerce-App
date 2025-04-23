import { Close, Remove } from '@mui/icons-material';
import { Button, Divider, IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

function CartItem() {
  const handleUpdateQuantity = () => {};

  const handleRemoveItem = () => {
    console.log("Item removed from cart");
  };

  return (
    <div className="relative border rounded-md p-5" style={{ position: "relative" }}>
      {/* Close Button (Top Right) - Fixed with Inline CSS */}
      <IconButton
        size="small"
        onClick={handleRemoveItem}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <Close />
      </IconButton>

      {/* Main Content */}
      <div className="flex gap-4 items-center">
        {/* Product Image */}
        <img
          src="https://imgs.search.brave.com/wYnbxamzrWuB470wstzIz5j36d9F2Y4rIw6a12DEQuE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zYW15YWtrLmNv/bS9wdWIvbWVkaWEv/Y2F0YWxvZy9wcm9k/dWN0L3MvbC9zbDEz/MjRfMV8xLmpwZw"
          className="w-32 h-48 object-cover"
          alt="Thumbnail"
        />

        {/* Product Details */}
        <div className="flex flex-col space-y-2">
          <h1 className="font-semibold text-lg">Virani Clothing</h1>
          <p>New Sari Which is Expensive and Limited Edition</p>
          <p>
            <strong>Sold By:</strong> Natural Lifestyle Product
          </p>
          <p>7 Days Replacement</p>
          <p>
            <strong>Quantity:</strong> 1
          </p>
        </div>
      </div>

      <Divider />

      {/* Bottom Section: Quantity and Price */}
      <div className="px-5 py-2 flex justify-between items-center ">
        <div className="flex items-center gap-2 w-[140px] justify-between ">
          <Button disabled={true}>
            <Remove />
          </Button>
          <span>1</span>
          <Button onClick={handleUpdateQuantity}>
            <AddIcon />
          </Button>
        </div>

        <p>
          <strong>Price :</strong> 7990
        </p>
      </div>
    </div>
  );
}

export default CartItem;
