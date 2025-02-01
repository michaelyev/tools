export function generateSearchUrl({ q = "", category = "", page = 1, pageSize = 12 }) {
    const basePath = "http://localhost:4100/products/search";
  
    const queryParams = new URLSearchParams({
      ...(q && { q }),
      ...(category && { category }),
      page: page.toString(),
      size: pageSize.toString(),
    });
  
    return `${basePath}?${queryParams.toString()}`;
  }
  