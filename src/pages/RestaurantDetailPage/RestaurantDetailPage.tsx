import React from 'react';
import { Outlet, useParams, useResolvedPath } from 'react-router-dom';

import { Placeholder, Tab, TabPanel } from '../../components';
import { RestaurantCardFeature } from '../../features';

export const RestaurantDetailPage: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const { pathname: basePath } = useResolvedPath('');

  if (!restaurantId) {
    return <Placeholder>Restaurant not found</Placeholder>;
  }

  return (
    <RestaurantCardFeature key={restaurantId} restaurantId={restaurantId}>
      <TabPanel>
        <Tab to={`${basePath}/menu`}>Menu</Tab>
        <Tab to={`${basePath}/reviews`}>Reviews</Tab>
      </TabPanel>
      <Outlet />
    </RestaurantCardFeature>
  );
};
