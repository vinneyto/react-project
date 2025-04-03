import React, { PropsWithChildren } from 'react';

import { RestaurantCard } from '../../components';
import { useAppSelector } from '../../hooks';
import { selectRestaurantById } from '../../store';

interface RestaurantCardFeatureProps extends PropsWithChildren {
  restaurantId: string;
}

export const RestaurantCardFeature: React.FC<RestaurantCardFeatureProps> = ({
  restaurantId,
  children
}) => {
  const restaurant = useAppSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  // return (
  //   <RestaurantCard
  //     name={restaurant.name}
  //     menu={<RestaurantMenuFeature dishIds={restaurant.menu} />}
  //     reviews={<RestaurantReviewsFeature reviewIds={restaurant.reviews} />}
  //   />
  // );

  return <RestaurantCard name={restaurant.name}>{children}</RestaurantCard>;
};
