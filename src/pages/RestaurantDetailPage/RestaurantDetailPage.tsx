import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { Placeholder, Tab, TabPanel } from '../../components';
import { RestaurantCardFeature } from '../../features';

export const RestaurantDetailPage: React.FC = () => {
  const { restaurantId } = useParams();
  if (!restaurantId) {
    return <Placeholder>Restaurant not found</Placeholder>;
  }

  return (
    <RestaurantCardFeature key={restaurantId} restaurantId={restaurantId}>
      <TabPanel>
        <Tab to="menu">Menu</Tab>
        <Tab to="reviews">Reviews</Tab>
      </TabPanel>
      <Outlet />
    </RestaurantCardFeature>
  );
};
