import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { logout } from "../AuthSlice";

export const fetchSellerProfile = createAsyncThunk(
    "sellers/fetchSellerProfile",  // Fixed: Removed leading slash
    async (jwt: string, { rejectWithValue }) => {
        try {
            const response = await api.get(
                "/sellers/profile",
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            console.log("jwt =", jwt);
            console.log("fetchSellerProfile: ", response.data);
            return response.data;  // Added return statement
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error);  // Added return statement
        }
    }
);

interface SellerState {
    seller: any[],
    selectSeller: any,
    profile: any,
    report: any,
    loading: boolean,
    error: any
}

const initialState: SellerState = {  // Fixed spelling: intialState -> initialState
    seller: [],
    selectSeller: null,
    profile: null,
    report: null,
    loading: false,
    error: null,
};

// const sellerSlice = createSlice({
//     name: "sellers",
//     initialState,  // Fixed spelling
//     reducers: {},  // Fixed: reducers instead of reducer, added empty object
//     extraReducers: (builder) => {  // Fixed: extraReducers instead of extraReducer
//         builder
//             .addCase(fetchSellerProfile.pending, (state) => {  // Fixed: stat -> state
//                 state.loading = true;
//             })
//             .addCase(fetchSellerProfile.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.profile = action.payload;
//                 state.error = null;  // Added error reset
//             })
//             .addCase(fetchSellerProfile.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;  // Fixed: should set error, not profile
//             });
//     }
// });




// Updated sellerSlice.ts
const sellerSlice = createSlice({
    name: "sellers",
    initialState,
    reducers: {
      // Add a reducer to clear seller data manually if needed
      clearSellerProfile: (state) => {
        state.profile = null;
        state.error = null;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchSellerProfile.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchSellerProfile.fulfilled, (state, action) => {
          state.loading = false;
          state.profile = action.payload;
          state.error = null;
        })
        .addCase(fetchSellerProfile.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        // Add logout case
        .addCase(logout.fulfilled, (state) => {
          state.profile = null;
          state.loading = false;
          state.error = null;
        });
    }
  });
  
  export const { clearSellerProfile } = sellerSlice.actions;
  export default sellerSlice.reducer;

 // Fixed: added default export

// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { api } from "../../config/Api";

// // Define proper types for your seller profile
// interface SellerProfile {
//     id: string;
//     name: string;
//     email: string;
//     businessName?: string;
//     // Add all other profile fields you expect from the API
// }

// interface SellerState {
//     seller: any[]; // Consider proper typing here if possible
//     selectSeller: any | null;
//     profile: SellerProfile | null;
//     report: any | null;
//     loading: boolean;
//     error: any | null;
// }

// const initialState: SellerState = {
//     seller: [],
//     selectSeller: null,
//     profile: null,
//     report: null,
//     loading: false,
//     error: null,
// };

// export const fetchSellerProfile = createAsyncThunk(
//     "sellers/fetchSellerProfile",
//     async (jwt: string, { rejectWithValue }) => {
//         try {
//             const response = await api.get("/sellers/profile", {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             });
//             return response.data as SellerProfile;
//         } catch (error: any) {
//             // Handle specific error cases if needed
//             if (error.response && error.response.data) {
//                 return rejectWithValue(error.response.data);
//             }
//             return rejectWithValue(error.message || "Unknown error occurred");
//         }
//     }
// );

// const sellerSlice = createSlice({
//     name: "sellers",
//     initialState,
//     reducers: {
//         // Add any synchronous actions you might need
//         clearSellerProfile: (state) => {
//             state.profile = null;
//             state.error = null;
//         },
//         resetSellerError: (state) => {
//             state.error = null;
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchSellerProfile.pending, (state) => {
//                 state.loading = true;
//                 state.error = null; // Clear previous errors when new request starts
//             })
//             .addCase(fetchSellerProfile.fulfilled, (state, action: PayloadAction<SellerProfile>) => {
//                 state.loading = false;
//                 state.profile = action.payload;
//             })
//             .addCase(fetchSellerProfile.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.profile = null; // Clear profile on error
//             });
//     }
// });

// // Export actions
// export const { clearSellerProfile, resetSellerError } = sellerSlice.actions;

// export default sellerSlice.reducer;