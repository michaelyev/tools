export async function getProducts() {
    try {
      const response = await fetch("http://localhost:4100/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return null;
    }
  }
  