import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4100';

/**
 * Fetch project page data from backend
 * @param state - State abbreviation (e.g., 'wa')
 * @param city - City name (e.g., 'seattle')
 * @param category - Category value (e.g., 'earthmoving')
 * @returns Page data or null if not found
 */
export const fetchProjectPage = async (state: string, city: string, category: string) => {
  try {
    const response = await axios.get(`${API_URL}/project_page/${state}/${city}/${category}`);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      console.warn('⚠️ Project page not found:', `${state}/${city}/${category}`);
      return null;
    } else {
      console.error('❌ Error fetching project page:', error.message || error);
      throw error;
    }
  }
};
