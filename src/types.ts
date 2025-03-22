export interface MenuItem {
  id: string;
  price: number;
  name: string;
  ingredients: string[];
}

export interface Review {
  id: string;
  user: string;
  text: string;
  rating: number;
}

export interface Restaurant {
  id: string;
  name: string;
  menu: MenuItem[];
  reviews: Review[];
}

export interface User {
  id: string;
  name: string;
}
