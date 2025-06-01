import axios from "axios";

export async function getProducts({
  page = 1,
  pageSize = 12,
  email = "",
  id = "",
  slug = "",
  lat,
  lng,
  radius,
  category = "",
  subCategory = "",
  subSubcategory = "",
  q = "",
  timeRange = "",
  startDate = "",
  endDate = "",
}) {
  try {
    // Construct the URL path dynamically
    const path = [
      "http://localhost:4100/products",
      category,
      subCategory,
      subSubcategory,
    ]
      .filter(Boolean) // Remove empty values
      .join("/");

    console.log("Constructed URL:", path);

    // Add query parameters dynamically
    const response = await axios.get(path, {
      params: {
        page,
        size: pageSize,
        email,
        subCategory,
        id,
        slug,
        lat,
        lng,
        radius,
        q,
        timeRange,
        startDate,
        endDate,
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
