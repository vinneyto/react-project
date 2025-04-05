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
  const restaurant = useAppSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  const { menu } = restaurant;

  return (
    <RestaurantMenu>
      {menu.map((id) => (
        <li key={id}>
          <DishLinkFeature dishId={id} />
        </li>
      ))}
    </RestaurantMenu>
  );
};
