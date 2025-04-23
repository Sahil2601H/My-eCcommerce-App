import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";


export const sellerLogin = createAsyncThunk<any,any>(
    "/auth/signing",
    async (loginRequest, { rejectWithValue }) => {
        try {
            const response = await api.post("/sellers/login",loginRequest);

            // Corrected console.log
            console.log("login otp: ", response);
            
            const jwt =response.data.jwt;
             localStorage.setItem("jwt",jwt);

            // or using template literals: `login otp: ${response}`


        } catch (error) {
            console.log("error", error);
        }
    }
);