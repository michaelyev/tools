import axios from "axios";

export async function getProducts({ page = 1, pageSize = 12, email = '' } = {}) {
  try {
    const response = await axios.get(`http://localhost:4100/products`, {
      params: {
        page,
        size: pageSize, 
        email 
      }
    })

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
      
    }
    console.log('sasdas')
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return null;
  }
}
