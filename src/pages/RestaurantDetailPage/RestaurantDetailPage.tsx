import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { Tab, TabPanel } from '../../components';
import RequestGuard from '../../components/RequestGuard/RequestGuard';
import { RestaurantCardFeature } from '../../features';
import { useRequest } from '../../hooks';
import { getRestaurantById } from '../../store';

export const RestaurantDetailPage: React.FC = () => {
  const { restaurantId } = useParams();

  const status = useRequest(getRestaurantById, restaurantId!);

  return (
    <RequestGuard
      status={status}
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
