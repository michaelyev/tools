import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4100';

/**
 * Fetch project page data from backend
 * Supports URLs with or without category
 */
export const fetchProjectPage = async (state?: string, city?: string, category?: string) => {
  if (!state || !city) return null;

  const endpoint = category 
    ? `${API_URL}/project_page/${state}/${city}/${category}`
    : `${API_URL}/project_page/${state}/${city}`;

  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      console.warn('⚠️ Project page not found:', endpoint);
      return null;
    } else {
      console.error('❌ Error fetching project page:', error.message || error);
      throw error;
    }
  }
};
