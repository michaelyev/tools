import axios from "axios";

/**
 * Fetches SEO content for product pages based on the URL pathname.
 *
 * This function parses the URL to identify category, state, and city.
 * It assumes a flexible URL structure, such as:
 * - /products/[category]
 * - /products/[state]/[city]
 * - /products/[category]/[state]/[city]
 *
 * The parameters are identified from the end of the path segments.
 *
 * It constructs a backend API URL in the format:
 * http://localhost:4100/product_seo_page/[state]/[city]/[category]
 *
 * @param pathname - The URL pathname from the browser (e.g., /earthmoving/wa/seattle).
 */
export const getProductSeoContent = async (pathname: string) => {
  // 1. Parse the path to extract segments, removing any empty parts
  const segments = pathname.split('/').filter((part) => part.length > 0);

  // 2. Identify parameters from the path segments
  const contentSegments = segments; // Use all segments
  let category, state, city;

  // Heuristic: check for a two-part location (state, city) at the end.
  if (contentSegments.length >= 2) {
    // This is a simple check; could be improved with a list of states if needed.
    // For now, we assume if there are 2+ segments, the last two might be location.
    // A more robust check might be needed if category names can be 2 letters.
    const potentialState = contentSegments[contentSegments.length - 2];
    const potentialCity = contentSegments[contentSegments.length - 1];
    
    // Simple assumption: if the second to last segment is 2 letters, it's a state code.
    if (potentialState.length === 2) {
        state = potentialState;
        city = potentialCity;
        // The category is what's left at the beginning
        if(contentSegments.length > 2) {
            category = contentSegments.slice(0, -2).join('/');
        }
    } else {
        // No location found, assume the whole thing is a category/subcategory path
        category = contentSegments.join('/');
    }
  } else if (contentSegments.length === 1) {
    category = contentSegments[0];
  }

  // 3. Construct the backend API URL
  const apiBaseUrl = "http://localhost:4100/product_seo_page";
  const urlParts = [];
  
  if (state) urlParts.push(state);
  if (city) urlParts.push(city);
  if (category) urlParts.push(category);

  const apiUrl = urlParts.length > 0 ? `${apiBaseUrl}/${urlParts.join('/')}` : apiBaseUrl;

  console.log(`Fetching SEO content from: ${apiUrl}`);

  // 4. Fetch data and handle response
  try {
    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      console.error(`API responded with status: ${response.status}`);
      return null;
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching product SEO content:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
    return null;
  }
};
