import { Restaurant } from './mock';

export const getRatingClass = (rating: number, high: string, low: string) => {
  if (rating >= 4) {
    return high;
  } else {
    return low;
  }
};

export const findRestaurantSafe = (restaurants: Restaurant[], id: string) => {
  const restaurant = restaurants.find(r => r.id === id);
  if (!restaurant) {
    throw new Error(`Restaurant with id ${id} not found`);
  }
  return restaurant;
};
