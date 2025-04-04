import { Restaurant } from './types';

export const getRatingClass = (rating: number, high: string, low: string) => {
  if (rating >= 4) {
    return high;
  } else {
    return low;
  }
};

export const findRestaurantSafe = (restaurants: Restaurant[], id: string) => {
  const restaurant = restaurants.find((r) => r.id === id);
  if (!restaurant) {
    throw new Error(`Restaurant with id ${id} not found`);
  }
  return restaurant;
};

export function normalize<T extends { id: string }>(
  array: T[]
): Record<string, T> {
  return array.reduce(
    (acc, item) => {
      acc[item.id] = item;
      return acc;
    },
    {} as Record<string, T>
  );
}
