import axios from "axios";


export async function getProducts({ page = 1, pageSize = 12, query = "", id = "", slug = "" } = {}) {
  console.log(`Fetching products for page ${page}, size ${pageSize}, query "${query}", id "${id}", slug "${slug}"`);
  try {
    const response = await axios.get(`http://localhost:4100/products/`, {
      params: { page, size: pageSize, query, id, slug },
    });
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return { products: [], total: 0 };
  }
}


