import axios from "axios";

export async function getVendorProducts({ page = 1, pageSize = 28, email = '' } = {}) {
  try {
    const response = await axios.get("http://localhost:4100/products", {
      params: {
        page,
        size: pageSize, // Используем "size", так как это ожидает сервер
        email, // Передаем email для фильтрации на сервере
      },
    });

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Возвращаем данные, полученные от API
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return null;
  }
}
