import React from 'react';

import { RestaurantMenu } from '../../components';
import { useAppSelector } from '../../hooks';
import { selectRestaurantById } from '../../store';
import { DishLinkFeature } from '../DishLinkFeature';

interface RestaurantMenuFeatureProps {
  restaurantId: string;
}

export const RestaurantMenuFeature: React.FC<RestaurantMenuFeatureProps> = ({
  restaurantId
}) => {
  const { menu } = useAppSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <RestaurantMenu>
      {menu.map((id) => (
        <li key={id}>
          <DishLinkFeature dishId={id} />
          {/* <DishCardFeature dishId={id} /> */}
        </li>
      ))}
    </RestaurantMenu>
  );
};
