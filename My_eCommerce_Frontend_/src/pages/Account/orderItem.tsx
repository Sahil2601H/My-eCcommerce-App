import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { yellow } from "@mui/material/colors";
import React from "react";

function OrderItem() {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      {/* Order Status */}
      <div className="flex items-center gap-3">
        <Avatar sizes="small" sx={{ bgcolor: yellow[600]  }}>
          <ElectricBolt />
        </Avatar>
        <div>
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p>Arriving By Monday, April 1</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="p-5 bg-teal-50 flex gap-3">
        {/* Product Image */}
        <div>
          <img
            className="w-[70px]"
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQeBf3aAOgVZ01LORiSVRJp_MqhF1c82LWNulmuSY53aTjUx7GCXmd8WQTEyh1f1EogFebzhe8RVGYxQk_-5sfpenoAnbZO7wbvlgkJcq72zUwO6wn249QS"
            alt="Apple Watch"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="font-semibold">Apple Watch</h1>
          <p className="text-gray-600">Premium watch</p>
          <p>
            <strong>Quantity:</strong> 1
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
