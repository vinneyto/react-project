import { Layout, ThemeProvider } from './features';
import { RestaurantPage } from './pages';

export function App() {
  return (
    <ThemeProvider>
      <Layout>
        <RestaurantPage />
      </Layout>
    </ThemeProvider>
  );
}
