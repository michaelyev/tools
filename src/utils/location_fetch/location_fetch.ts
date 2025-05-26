export const getUserLocation = async (): Promise<{
  latitude: number;
  longitude: number;
  city: string;
  zip: string;
} | null> => {
  // 1. Пытаемся получить геолокацию через IP без запроса у пользователя
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();

    if (!data || !data.city || !data.latitude || !data.longitude || !data.postal) {
      throw new Error('Incomplete IP data');
    }

    console.log('🌐 IP-based location:', data);

    return {
      latitude: data.latitude,
      longitude: data.longitude,
      city: data.city,
      zip: data.postal,
    };
  } catch (err) {
    console.warn('⚠️ IP geolocation failed, falling back to navigator.geolocation');
  }

  // 2. Fallback на navigator.geolocation, если IP не сработал
  if (typeof window === 'undefined') return null;
  if (!('geolocation' in navigator)) return null;
  if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') return null;

  try {
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000,
      });
    });

    const { latitude, longitude } = position.coords;

    const apiKey = '3f0b27040d8d44c7bbcb88e1b5a7d6d5';
    const reverseUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&pretty=1`;

    const response = await fetch(reverseUrl);
    const data = await response.json();

    const city =
      data.results[0]?.components?.city ||
      data.results[0]?.components?.town ||
      data.results[0]?.components?.village ||
      'Unknown';

    const zip = data.results[0]?.components?.postcode || 'Unknown';

    console.log('📍 Fallback GPS location:', { latitude, longitude, city, zip });

    return { latitude, longitude, city, zip };
  } catch (error: any) {
    console.error('❌ getUserLocation failed entirely:', error.message || error);
    return null;
  }
};

export const getZipFromCity = async ({
  city,
  state = 'WA',
  country = 'USA',
}: {
  city: string;
  state?: string;
  country?: string;
}): Promise<string | null> => {
  const apiKey = '3f0b27040d8d44c7bbcb88e1b5a7d6d5';

  // Step 1: Get coordinates from city
  const geoQuery = `${city}, ${state}, ${country}`;
  const geoUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    geoQuery
  )}&key=${apiKey}&pretty=1&limit=1`;

  try {
    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();
    const geometry = geoData?.results?.[0]?.geometry;

    if (!geometry) {
      console.warn('⚠️ Coordinates not found for city:', geoQuery);
      return null;
    }

    const { lat, lng } = geometry;

    // Step 2: Reverse geocode from lat/lng to get ZIP
    const reverseUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}&pretty=1&limit=1`;
    const reverseRes = await fetch(reverseUrl);
    const reverseData = await reverseRes.json();
    const zip = reverseData?.results?.[0]?.components?.postcode || null;

    if (!zip) {
      console.warn('⚠️ ZIP not found from coordinates:', { lat, lng });
    }

    return zip;
  } catch (err) {
    console.error('❌ Failed to resolve ZIP from city center:', err);
    return null;
  }
};


export const getCoordsFromZip = async (zip: string): Promise<{ lat: number; lng: number } | null> => {
  const apiKey = '3f0b27040d8d44c7bbcb88e1b5a7d6d5'; // OpenCage API key
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${zip}&key=${apiKey}&pretty=1&limit=1`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const coords = data?.results?.[0]?.geometry;

    if (!coords) {
      console.warn("⚠️ ZIP not found:", zip);
      return null;
    }

    return { lat: coords.lat, lng: coords.lng };
  } catch (err) {
    console.error("❌ ZIP → coords failed:", err);
    return null;
  }
};
