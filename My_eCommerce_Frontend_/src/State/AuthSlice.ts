import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";
import { Navigate } from "react-router-dom";

export const sentLoginSignupOtp = createAsyncThunk(
    "/sellers/fetchSellerProfile",
    async ({ email }: { email: string }, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/sent/login-signup-otp",{email});

            // Corrected console.log
            console.log("login otp: ", response); // or using template literals: `login otp: ${response}`
        } catch (error) {
            console.log("error", error);
        }
    }
);


export const sigingin = createAsyncThunk<any,any>(
    "/sellers/fetchSellerProfile",
    async ({ email }: { email: string }, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/signing",{email});

            // Corrected console.log
            console.log("login otp: ", response); // or using template literals: `login otp: ${response}`
        } catch (error) {
            console.log("error", error);
        }
    }
);



// export const logout=createAsyncThunk<any,any>("/auth/logout",
//     async(Navigate,{rejectValue})=>{

//         try {

//             localStorage.clear()
//             console.log('logout success')
//             Navigate("/")
            
//         } catch (error) {

//             console.log("error  ---",error)
            
//         }
//     }
// )

// Updated authSlice.ts
export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
      try {
        // Optional: Call your backend logout endpoint if you have one
        // await api.post("/auth/logout");
        localStorage.removeItem("jwt");
        return true;
      } catch (error: any) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );