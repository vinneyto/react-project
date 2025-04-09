import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { RequestGuard, Tab, TabPanel } from '../../components';
import { RestaurantCardFeature } from '../../features';
import { useGetRestaurantsQuery } from '../../store';

export const RestaurantDetailPage: React.FC = () => {
  const { restaurantId } = useParams();

  // это дичь - но мы знаем что до этого момента будет вызван список с ресторанами
  const { isLoading, isError } = useGetRestaurantsQuery();

  return (
    <RequestGuard
      isLoading={isLoading}
      isError={isError}
      pendingText="Loading..."
      errorText="Error loading restaurant"
    >
      <RestaurantCardFeature key={restaurantId} restaurantId={restaurantId!}>
        <TabPanel>
          <Tab to="menu">Menu</Tab>
          <Tab to="reviews">Reviews</Tab>
        </TabPanel>
        <Outlet />
      </RestaurantCardFeature>
    </RequestGuard>
  );
};
