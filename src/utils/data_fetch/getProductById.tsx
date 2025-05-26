export const getProductById = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:4100/products/by-id/${id}`, { cache: "no-store" });
      if (!res.ok) return null;
      return res.json();
    } catch (err) {
      console.error("Failed to fetch product:", err);
      return null;
    }
  };
  