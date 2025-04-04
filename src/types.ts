export interface MenuItem {
  id: string;
  price: number;
  name: string;
  ingredients: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
}

export interface Dish {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export interface Review {
  id: string;
  userId: string;
  text: string;
  rating: number;
}

export interface User {
  id: string;
  name: string;
}
