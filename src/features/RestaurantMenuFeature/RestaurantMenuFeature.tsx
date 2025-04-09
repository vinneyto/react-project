import React from 'react';

import { RestaurantMenu } from '../../components';
import { useGetDishesByRestaurantIdQuery } from '../../store';
import { DishLinkFeature } from '../DishLinkFeature';

interface RestaurantMenuFeatureProps {
  restaurantId: string;
}

export const RestaurantMenuFeature: React.FC<RestaurantMenuFeatureProps> = ({
  restaurantId
}) => {
  const { data: menu } = useGetDishesByRestaurantIdQuery(restaurantId ?? '');

  return (
    <RestaurantMenu>
      {menu!.map((dish) => (
        <li key={dish.id}>
          <DishLinkFeature dish={dish} />
        </li>
      ))}
    </RestaurantMenu>
  );
};
