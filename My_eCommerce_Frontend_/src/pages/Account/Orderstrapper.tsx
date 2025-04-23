import React, { useEffect, useState } from "react";
import { FiberManualRecord, CheckCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const steps = [
  { name: "Order placed", description: "on Thu 11 Jul", value: "Placed" },
  { name: "Order packed", description: "on Fri 12 Jul", value: "Packed" },
  { name: "Order shipped", description: "on Sat 13 Jul", value: "Shipped" },
  { name: "Order arriving", description: "on Mon 15 Jul", value: "Arriving" },
  { name: "Order arrived", description: "on Tue 16 Jul", value: "Arrived" },
];

const cancelSteps = [
  { name: "Cancellation requested", description: "on Thu 11 Jul", value: "Requested" },
  { name: "Cancellation processing", description: "on Fri 12 Jul", value: "Processing" },
  { name: "Order cancellation approved", description: "on Sat 13 Jul", value: "Approved" },
  { name: "Refund initiated", description: "on Mon 15 Jul", value: "Refund Initiated" },
  { name: "Refund completed", description: "on Tue 16 Jul", value: "Refunded" },
];

const currentStep = 2;

const OrderStepper = ({ orderStatus }) => {
  const [statusStep, setStatusStep] = useState(steps);

  useEffect(() => {
    setStatusStep(orderStatus === "CANCELLED" ? cancelSteps : steps);
  }, [orderStatus]);

  return (
    <Box className="mx-auto my-10 w-full max-w-md">
      {statusStep.map((step, index) => (
        <div key={index} className="relative flex items-start">
          {/* Step Icon and Vertical Line */}
          <div className="flex flex-col items-center">
            <Box
              className="w-8 h-8 rounded-full flex items-center justify-center z-10"
              sx={{
                backgroundColor: index <= currentStep ? "#42a5f5" : "#e0e0e0",
                color: index <= currentStep ? "white" : "#757575",
              }}
            >
              {index <= currentStep ? <CheckCircle fontSize="small" /> : <FiberManualRecord fontSize="small" />}
            </Box>

            {/* Vertical Line - Fully Connected */}
            {index < statusStep.length - 1 && (
              <div
                className="w-[2px] h-16"
                style={{
                  backgroundColor: index < currentStep ? "#42a5f5" : "#e0e0e0",
                }}
              ></div>
            )}
          </div>

          {/* Step Text - Properly Aligned */}
          <div className="flex flex-col pl-4">
            <Typography variant="h6" className="text-black font-semibold">{step.name}</Typography>
            <Typography variant="body2" className="text-gray-600">{step.description}</Typography>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default OrderStepper;
