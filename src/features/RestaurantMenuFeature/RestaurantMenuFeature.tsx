import React from 'react';

import { RestaurantMenu } from '../../components';
import { DishCardFeature } from '../DishCardFeature';

interface RestaurantMenuFeatureProps {
  dishIds: string[];
}

export const RestaurantMenuFeature: React.FC<RestaurantMenuFeatureProps> = ({
  dishIds
}) => {
  return (
    <RestaurantMenu>
      {dishIds.map((id) => (
        <li key={id}>
          <DishCardFeature dishId={id} />
        </li>
      ))}
    </RestaurantMenu>
  );
};
