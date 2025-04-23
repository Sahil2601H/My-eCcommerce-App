import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import AddressCard from './AddressCard';
import AddressForm from './Addressform';
import Pricecard from '../Cart/Pricecard';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
function Checkout() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const paymentOptions = [
      {
        id: "razorpay",
        label: "Razorpay",
        image: "https://imgs.search.brave.com/zZ4_0cr6el64_NDRNHO4zYYNlE8rhPzX943afFprQs4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25ydXNo/LmNvbS9pbnNwaXJh/dGlvbl9pbWFnZXMv/NjU2NDAwL2NvbnZl/cnNpb25zLzEtZGVz/a3RvcC5qcGc", // Update with actual image path
      },
      {
        id: "stripe",
        label: "Stripe",
        image: "https://imgs.search.brave.com/Qu70MqgMjg5sXehFF6vwSHN-9wIHRnk8b6UGJvEjr0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ic21l/ZGlhLmJ1c2luZXNz/LXN0YW5kYXJkLmNv/bS9fbWVkaWEvYnMv/aW1nL2FydGljbGUv/MjAyNS0wMi8yMC9m/dWxsLzE3NDAwNjA4/MDAtMjIzNS5qcGc_/aW09Rml0QW5kRmls/bD0oODI2LDQ2NSk", // Update with actual image path
      },
      
    ];
  return (
    <>
    <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
      <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">

        {/* Left Section (Address Selection) */}
        <div className="col-span-2 space-y-5">

          {/* Heading and Button (Aligned in Same Line) */}
          <div className="flex justify-between items-center mt-3">
            <h1 className="font-semibold">Select Address</h1>
            <Button
            onClick={handleOpen}
            variant="contained">Add New Address</Button>
          </div>

          {/* Saved Addresses */}
          <div className="text-xs font-medium space-y-5">
            <p>Saved Address</p>
            <div className="mt-3 space-y-3">
              {[1].map((item, index) => (
                <AddressCard key={index} />
              ))}
            </div>
          </div>
          
        </div>
        <div className='rounded-md border '>
        <h1 className="text-center bg-[white] text-dodgerblue font-semibold py-2 mt-2">
  Choose Payment Gateway
</h1>
        <div className="flex justify-center items-center mt-2">
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="stripe"
    name="radio-buttons-group"
    className="flex flex-col items-center"
  >
    {paymentOptions.map((option) => (
      <FormControlLabel
        key={option.id}
        value={option.id}
        control={<Radio />}
        label={
          <span className="flex items-center gap-2">
            <img src={option.image} alt={option.label} width={75} height={30} />
            
          </span>
        }
        className="flex items-center"
      />
    ))}
  </RadioGroup>
</div>

                  <Pricecard/>
                  <div className='p-5'>
                  <Button
                  fullWidth
                  variant='contained'
                  sx={{py:"11px"}}
                  > Checkout</Button>
                 </div>
                 </div>
                 
      </div>
    </div>

    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box sx={{ ...style,  minWidth: 250, maxWidth: 400 }}>
    <h2 id="parent-modal-title"></h2>
    <p id="parent-modal-description">
      <AddressForm/>
    </p>
  </Box>
</Modal>

    </>
  );
}

export default Checkout;
