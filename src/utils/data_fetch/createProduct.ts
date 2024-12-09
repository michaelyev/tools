import axios from "axios";

// API function to post a new product
export const createProduct = async (productData: any) => {
  try {
    const response = await axios.post("http://localhost:4100/products", productData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; // Return response data
  } catch (error: any) {
    console.error("Error creating product:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to create product");
  }
};
