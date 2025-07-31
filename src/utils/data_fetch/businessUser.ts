export const getAllBusinesses = async () => {
    try {
      const res = await fetch(`http://localhost:4100/businesses/`, { cache: "no-store" });
      if (!res.ok) return null;
      return res.json();
    } catch (err) {
      console.error("Failed to fetch product:", err);
      return null;
    }
};

export const getBusinessByEmail = async (email: string) => {
    try {
      const res = await fetch(`http://localhost:4100/businesses/email/$${email}`, { cache: "no-store" });
      if (!res.ok) return null;
      return res.json();
    } catch (err) {
      console.error("Failed to fetch product:", err);
      return null;
    }
};
  