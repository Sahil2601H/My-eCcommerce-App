import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Product } from "../../types/productType";

// Define proper types for API responses and errors
type ApiError = {
  message: string;
  status?: number;
  data?: any;
};

export const fetchSellerProduct = createAsyncThunk<Product[], string, { rejectValue: ApiError }>(
  "sellersProduct/fetchSellerProduct",  // Fixed action type to match function name
  async (jwt: string, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/products", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      const data=response.data;
      console.log(" data :",data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue({
          message: error.response.data?.message || 'Request failed',
          status: error.response.status,
          data: error.response.data
        });
      }
      return rejectWithValue({
        message: error.message || 'Network error'
      });
    }
  }
);

export const createProduct = createAsyncThunk<Product, { request: any; jwt: string }, { rejectValue: ApiError }>(
  "sellersProduct/createProduct",
  async ({ request, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.post("/sellers/products", request, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue({
          message: error.response.data?.message || 'Request failed',
          status: error.response.status,
          data: error.response.data
        });
      }
      return rejectWithValue({
        message: error.message || 'Network error'
      });
    }
  }
);

interface SellerProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: SellerProductState = {
  products: [],
  loading: false,
  error: null,
};

const sellersProductSlice = createSlice({
  name: "sellersProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Seller Products
      .addCase(fetchSellerProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchSellerProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message || 'Failed to fetch products';
      })
      
      // Create Product
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message || 'Failed to create product';
      });
  }
});

export default sellersProductSlice.reducer;