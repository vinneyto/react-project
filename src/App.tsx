import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './features';
import { HomePage, RestaurantDetailPage, RestaurantListPage } from './pages';
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
                <Route
                  path=":restaurantId"
                  element={<RestaurantDetailPage />}
                />
              </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
