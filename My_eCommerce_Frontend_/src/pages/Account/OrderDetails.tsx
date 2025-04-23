import { Box, Button, Divider } from "@mui/material";
import React from "react";
import OrderStepper from "./Orderstrapper";
import { Cancel, Payments } from "@mui/icons-material";

const OrderDetails: React.FC = () => {
  return (
    <>
      <Box className="space-y-5">
        {/* Section 1: Product Details (Full Width) */}
        <section className="flex flex-col gap-5 justify-center items-center">
          <img
            className="w-[150px]"
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQeBf3aAOgVZ01LORiSVRJp_MqhF1c82LWNulmuSY53aTjUx7GCXmd8WQTEyh1f1EogFebzhe8RVGYxQk_-5sfpenoAnbZO7wbvlgkJcq72zUwO6wn249QS"
            alt="Apple Watch"
          />
          <div className="text-sm space-y-1 text-center">
            <h1 className="font-bold">Apple Watch</h1>
            <p>
              Cellecor Ray 1.43" AMOLED Display | 700 NITS | AOD | BT-Calling | AI
              | Voice Calling | Split Screen SmartWatch
            </p>
            <p>
              <strong>Quantity :</strong> 1
            </p>
          </div>
        </section>

        {/* Divider */}
        <Divider />

        {/* Section 2 & 3 Side by Side */}
        <div className="flex flex-col md:flex-row gap-5 w-full">
          {/* Section 2: Order Stepper (Left Side) */}
          <section className="border p-5 w-full md:flex-1">
            <OrderStepper />
          </section>

          {/* Section 3: Delivery, Price, Payment (Right Side) */}
          <div className="flex flex-col gap-2.5 w-full md:flex-1">
            {/* Delivery Address */}
            <div className="border rounded-lg p-5 shadow-sm bg-white w-full">
              <h1 className="font-bold text-lg pb-3">Delivery Address</h1>
              <div className="text-sm space-y-2">
                <div className="flex items-center gap-5 font-medium">
                  <p className="text-gray-800">Zosh</p>
                  <Divider flexItem orientation="vertical" />
                  <p className="text-gray-800">6351108442</p>
                </div>
                <p className="text-gray-700">Jsd Complex Allu, Bardoli, Surat - 394620</p>
              </div>
            </div>

            {/* Savings & Total Price Section */}
            <div className="border rounded-lg p-5 shadow-sm bg-white w-full">
              <div className="space-y-1">
                <p className="text-gray-600">You Saved</p>
                <span className="text-orange-500 font-medium text-lg">₹5000</span>
              </div>
              <p className="font-medium text-lg text-gray-800">Total: ₹4000</p>
            </div>

            {/* Payment Method Section */}
            <div className="border rounded-lg p-5 shadow-sm bg-white w-full">
              <div className="bg-blue-50 px-5 py-3 text-sm font-medium flex items-center gap-3 rounded-md">
                <Payments className="text-teal-500" />
                <p className="text-gray-700">Pay On Delivery</p>
              </div>
            </div>

            {/* Cancel Order Button */}
            
              <Button
                variant="contained"
                className="bg-[#f57c42] hover:bg-[#e66a30] text-white px-5 py-2 rounded-lg flex items-center gap-2"
              >
                <Cancel />
                <span>Cancel Order</span>
              </Button>
            
          </div>
        </div>
      </Box>
    </>
  );
};

export default OrderDetails;
