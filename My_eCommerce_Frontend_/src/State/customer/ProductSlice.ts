import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import { api } from "../../config/Api"; 
import { Product } from "../../types/productType";

const API_URL = "/products"; 

// Async Thunks
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById", 
  async (productId: string, { rejectWithValue }) => { 
    try { 
      const response = await api.get(`${API_URL}/${productId}`); 
      const data = response.data; 
      console.log("data product fetch:", data);
      return data; 
    } catch (error: any) {
      console.log("error:", error);
      return rejectWithValue(error.message); 
    }
  }
);

export const searchProduct = createAsyncThunk(
  "products/searchProduct", 
  async (query: string, { rejectWithValue }) => { 
    try { 
      const response = await api.get(`${API_URL}/search`, {
        params: { query }
      }); 
      const data = response.data;
      console.log("search Product:", data);
      return data;
    } catch (error: any) {
      console.log("error:", error);
      return rejectWithValue(error.message); 
    }
  }
);

// ProductSlice.ts
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts", 
  async (params: any = {}, { rejectWithValue }) => { 
    try {
      const response = await api.get(API_URL, {
        params: {
          ...params,
          pageNumber: params.pageNumber || 0
        }
      });
      
      // Handle different response formats
      let products = [];
      let totalPages = 1;
      
      if (Array.isArray(response.data)) {
        // If response is directly an array
        products = response.data;

        console.log("fetch all product",response.data)
      } else if (response.data.content) {
        // Spring Page format
        products = response.data.content;
        totalPages = response.data.totalPages || 1;
      } else if (response.data.products) {
        // Custom format with products property
        products = response.data.products;
        totalPages = response.data.totalPages || 1;
      } else {
        // Fallback to empty array
        products = [];
      }
      
      return {
        products,
        totalPages
      };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// State Interface
interface ProductState {
  product: Product | null;
  products: Product[];
  totalPages: number;
  loading: boolean;
  error: string | null | undefined;
  searchResults: Product[];
}

// Initial State
const initialState: ProductState = {
  product: null,
  products: [],
  totalPages: 0,
  loading: false,
  error: null,
  searchResults: []
};

// Slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Product By ID
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Search Product
    builder.addCase(searchProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.searchResults = action.payload;
    });
    builder.addCase(searchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Fetch All Products
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.products || action.payload;
      state.totalPages = action.payload.totalPages || 0;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  }
});

export default productSlice.reducer;