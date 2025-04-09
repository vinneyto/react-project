import React, { PropsWithChildren } from 'react';

import { RestaurantCard } from '../../components';
import { useGetRestaurantsQuery } from '../../store';

interface RestaurantCardFeatureProps extends PropsWithChildren {
  restaurantId: string;
}

export const RestaurantCardFeature: React.FC<RestaurantCardFeatureProps> = ({
  restaurantId,
  children
}) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((restaurant) => restaurant.id === restaurantId)
    })
  });

  return <RestaurantCard name={restaurant!.name}>{children}</RestaurantCard>;
};
