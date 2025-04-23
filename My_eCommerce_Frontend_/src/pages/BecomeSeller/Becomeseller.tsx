import React, { useState } from 'react';
import Selleraccountform from './Selleraccountform';
import SellerLoginform from './sellerLoginform';
import { Button } from '@mui/material';

const imagePath6 = require("C:/Users/Sahil/Desktop/App/app/src/asset ecom/Become Seller @My eCommerce.png");

function Becomeseller() {
    const [isLogin, setIsLogin] = useState(false);

    const handeleShowPage = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Side - Form (40%) */}
            <section className="w-2/5 p-10 shadow-lg rounded-b-md">
                {isLogin ? <Selleraccountform /> : <SellerLoginform />}

                <div className="mt-10 space-y-2">
                    <h1 className="text-center text-sm font-medium">Have an Account?</h1>
                    <Button 
                        onClick={handeleShowPage} 
                        fullWidth 
                        sx={{ py: "11px" }} 
                        variant="outlined"
                    >
                        {isLogin ? "Register" : "Login"}
                    </Button>
                </div>
            </section>

            {/* Right Side - Information (60%) */}
            <section className="w-3/5 hidden md:flex justify-center items-center">
                <div className="lg:w-[60%] px-5 space-y-10 text-center">
                    <div className="space-y-2 font-bold">
                        <p className="text-2xl">Join The Marketplace</p>
                        <p className="text-2xl">Boost Your Sales</p>
                    </div>
                    <img src={imagePath6} alt="Become a Seller" className="w-full max-w-md mx-auto rounded-lg shadow-md" />
                </div>
            </section>
        </div>
    );
}

export default Becomeseller;
