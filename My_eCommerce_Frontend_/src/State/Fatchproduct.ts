// src/State/Fatchproduct.ts or wherever your fetch function is
import axios from "axios";

const api = "http://localhost:5456/products";

export const fetchProduct = async () => {
  try {
    const response = await axios.get(api);
   console.log("Response",response);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
