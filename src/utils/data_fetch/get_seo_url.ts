import getConfig from 'next/config';

/**
 * Finds a matching SEO URL configuration based on a given slug.
 * 
 * It searches through the `seoUrls` object to find a match for the provided `slug`.
 * 
 * @param slug - The URL slug to look for (e.g., 'excavator-rental-in-seattle').
 * @returns The matching SEO URL object, including its original keywords, or null if not found.
 */
export const findSeoUrl = (slug: string) => {
  const { publicRuntimeConfig } = getConfig();
  const seoUrls = publicRuntimeConfig.seoUrls || {};

  // Iterate over each category in the seoUrls object
  for (const category in seoUrls) {
    // Iterate over each location (city) within the category
    for (const location in seoUrls[category]) {
      const seoData = seoUrls[category][location];
      
      // Check if the seo slug matches the provided slug
      if (seoData.seo === slug) {
        // Return the full details, including the keys used to find it
        return {
          category,
          location,
          ...seoData,
        };
      }
    }
  }

  // Return null if no match is found
  return null;
}; 