import { Layout } from './features';
import { RestaurantPage } from './pages';
import { AuthProvider, ThemeProvider } from './providers';
import './theme.css';

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
          <RestaurantPage />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}
