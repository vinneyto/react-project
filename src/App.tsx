import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './features';
import {
  DishPage,
  HomePage,
  RestaurantDetailPage,
  RestaurantListPage,
  RestaurantMenuPage,
  RestaurantReviewsPage
} from './pages';
import { AuthProvider, ThemeProvider } from './providers';
import './theme.css';

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/restaurants" element={<RestaurantListPage />}>
                <Route path=":restaurantId" element={<RestaurantDetailPage />}>
                  <Route index element={<Navigate to="menu" replace />} />
                  <Route path="menu" element={<RestaurantMenuPage />} />
                  <Route path="reviews" element={<RestaurantReviewsPage />} />
                </Route>
              </Route>
              <Route path="dish/:dishId" element={<DishPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
