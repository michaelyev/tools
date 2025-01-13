export const getUserLocation = async (): Promise<{
    latitude: number;
    longitude: number;
    city: string;
  } | null> => {
    if (!("geolocation" in navigator)) {
      console.error("Geolocation is not supported by your browser");
      return null;
    }
  
    try {
      // Получение геолокации
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
  
      const { latitude, longitude } = position.coords;
  
      // API обратного геокодирования
      const reverseGeocodingAPIKey = "517294eb795e47baa1ca2529f2ceec12";
      const reverseGeocodingURL = `https://api.opencagedata.com/geocode/v1/json?key=${reverseGeocodingAPIKey}&q=${latitude}+${longitude}&pretty=1`;
  
      const response = await fetch(reverseGeocodingURL);
      const data = await response.json();
  
      const city = data.results[0]?.components?.city || "Unknown";
  
      return { latitude, longitude, city };
    } catch (error) {
      console.error("Error getting location:", error);
      return null;
    }
  };
  