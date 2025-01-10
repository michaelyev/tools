import axios from "axios";

export async function getProducts({
  page = 1,
  pageSize = 12,
  email = "",
  id = "",
  slug = "",
  lat,
  lng,
  distance,
  category = "paint",
  subcategory = "",
  subSubcategory = "",
}) {
  try {
    const response = await axios.get("http://localhost:4100/products", {
      params: {
        page,
        size: pageSize,
        email,
        id,
        slug,
        lat,
        lng,
        distance,
        category,
        subcategory,
        subSubcategory,
      },
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

