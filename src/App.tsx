import { Layout, ThemeProvider } from './features';
import { RestaurantPage } from './pages';
import './theme.css';

export function App() {
  return (
    <ThemeProvider>
      <Layout>
        <RestaurantPage />
      </Layout>
    </ThemeProvider>
  );
}
