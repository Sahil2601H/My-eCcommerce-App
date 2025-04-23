import React, { useState } from 'react';
import CartItem from './CartItem';
import { LocalOffer, Close } from '@mui/icons-material';
import { teal, red } from '@mui/material/colors';
import { Button, TextField, IconButton } from '@mui/material';
import Pricecard from './Pricecard';
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate(); // Move useNavigate inside the component
  const [couponCode, setCouponCode] = useState('');
  const [invalidCoupon, setInvalidCoupon] = useState(false);

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() !== 'shali30') {
      setInvalidCoupon(true);
    } else {
      setInvalidCoupon(false);
      console.log("Coupon Applied Successfully!");
      // Apply discount logic here
    }
  };

  return (
    <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

            {/* Cart Items Section */}
            <div className='CartItemSection lg:col-span-2 space-y-3'>
                {[1].map((item, index) => <CartItem key={index} />)}
            </div>

            {/* Coupon & Summary Section */}
            <div className='col-span-1 text-sm space-y-3 border p-5 rounded-md overflow-hidden'>

                {/* Coupon Box */}
                <div className=''>

                    {/* Coupon Title */}
                    <div className='flex gap-3 text-sm items-center '>
                        <LocalOffer sx={{ color: teal[600], fontSize: "17px" }} />
                        <span>Apply Coupons</span>
                    </div>

                    {/* Input and Button (Side by Side) */}
                    <div className="flex gap-2 mt-5" >
                        <TextField 
                            id="coupon-code" 
                            label="Enter Coupon" 
                            variant="outlined" 
                            size="small" 
                            fullWidth
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <Button 
                            variant="outlined" 
                            size="medium"
                            onClick={handleApplyCoupon}
                            sx={{ whiteSpace: 'nowrap' }}
                        >
                            Apply
                        </Button>
                    </div>

                    {/* Show error if coupon is invalid */}
                    {invalidCoupon && (
                        <div className="flex items-center justify-between bg-red-100 text-red-700 p-2 rounded-md border border-red-300">
                            <span>Coupon is not valid</span>
                            <IconButton size="small" onClick={() => setInvalidCoupon(false)}>
                                <Close sx={{ color: red[600] }} />
                            </IconButton>
                        </div>
                    )}

                </div>
                 <div className='rounded-md border'>
                  <Pricecard/>
                 </div>
                 <div className='p-5'>
                  <Button
                    onClick={() => navigate("/checkout")}
                    fullWidth
                    variant='contained'
                    sx={{py:"11px"}}
                  >
                    Buy Now
                  </Button>
                 </div>
            </div>

        </div>
    </div>
  );
}

export default Cart;
