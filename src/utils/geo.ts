import zipcodes from 'zipcodes';

export async function getCityAndNeighborhoodFromZip(zip: string) {
  const result = zipcodes.lookup(zip);

  if (!result) {
    throw new Error(`ZIP code ${zip} not found`);
  }

  const { city, state, latitude, longitude } = result;

  return {
    city,
    neighborhood: state, // можно заменить на city, если тебе не нужен state
    location: {
      type: 'Point',
      coordinates: [longitude, latitude], // обязательно [lng, lat]
    },
  };
}
