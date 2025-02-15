export const getUserLocation = async (): Promise<{
  latitude: number;
  longitude: number;
  city: string;
  zip: string;
} | null> => {
  if (typeof window === "undefined") return null; // Ensure it runs in the browser

  if (!("geolocation" in navigator)) {
    console.error("❌ Geolocation is not supported by this browser.");
    return null;
  }

  // Check if the site is HTTPS or localhost
  if (window.location.protocol !== "https:" && window.location.hostname !== "localhost") {
    console.error("❌ Geolocation only works on HTTPS or localhost.");
    return null;
  }

  try {
    // Get user coordinates
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true, // Use high accuracy if possible
        timeout: 10000, // 10 seconds timeout
      });
    });

    const { latitude, longitude } = position.coords;

    console.log("✅ Coordinates received:", latitude, longitude);

    // Reverse geocoding to get city and ZIP code
    const reverseGeocodingAPIKey = "3f0b27040d8d44c7bbcb88e1b5a7d6d5";
    const reverseGeocodingURL = `https://api.opencagedata.com/geocode/v1/json?key=${reverseGeocodingAPIKey}&q=${latitude}+${longitude}&pretty=1`;

    const response = await fetch(reverseGeocodingURL);
    if (!response.ok) {
      console.error("❌ Failed to fetch geolocation data");
      return { latitude, longitude, city: "Unknown", zip: "Unknown" };
    }

    const data = await response.json();

    // Extract city and ZIP code
    const city = data.results[0]?.components?.city || 
                 data.results[0]?.components?.town || 
                 data.results[0]?.components?.village || 
                 "Unknown";

    const zip = data.results[0]?.components?.postcode || "Unknown";

    console.log("✅ Location details:", { city, zip });

    return { latitude, longitude, city, zip };
  } catch (error: any) {
    console.error("❌ Error getting location:", error.message || error);
    return null;
  }
};
