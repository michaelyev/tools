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
  category = "",
  subСategory = "",
  subSubcategory = "",
}) {
  try {
    // Формируем путь маршрута
    const path = [
      "http://localhost:4100/products",
      category,
      subСategory,
      subSubcategory,
    ]
      .filter(Boolean) // Убираем пустые значения
      .join("/");

    console.log("Constructed URL:", path);

    // Добавляем query-параметры, если они есть
    const response = await axios.get(path, {
      params: {
        page,
        size: pageSize,
        email,
        id,
        slug,
        lat,
        lng,
        distance,
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
