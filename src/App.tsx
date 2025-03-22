import { Layout, ThemeProvider } from './features';
import AuthProvider from './features/AuthProvider/AuthProvider';
import { RestaurantPage } from './pages';
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
