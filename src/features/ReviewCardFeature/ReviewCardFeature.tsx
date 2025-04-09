import React, { useMemo } from 'react';

import { ReviewCard } from '../../components';
import { useGetUsersQuery } from '../../store';
import { Review, User } from '../../types';

interface ReviewCardFeatureProps {
  review: Review;
}

export const ReviewCardFeature: React.FC<ReviewCardFeatureProps> = ({
  review
}) => {
  const { data: users } = useGetUsersQuery();

  const user = useMemo(() => {
    return users?.find((user: User) => user.id === review.userId);
  }, [users, review.userId]);

  return (
    <ReviewCard text={review.text} rating={review.rating} user={user!.name} />
  );
};
