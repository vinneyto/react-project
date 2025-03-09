import { RestaurantList } from './components';
import { restaurants } from './mock';

export function App() {
  return <RestaurantList restaurants={restaurants} />;
}
