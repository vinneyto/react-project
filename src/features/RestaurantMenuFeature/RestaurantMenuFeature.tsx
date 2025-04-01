import React from 'react';

import { RestaurantMenu } from '../../components';
import { DishCardFeature } from '../DishCardFeature';

interface RestaurantMenuProps {
  dishIds: string[];
}

export const RestaurantMenuFeature: React.FC<RestaurantMenuProps> = ({
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
