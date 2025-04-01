import React from 'react';

import { ReviewCard } from '../../components';
import { useAppState } from '../../hooks';
import { selectReviewById, selectUserById } from '../../store';

interface ReviewCardFeatureProps {
  reviewId: string;
}

export const ReviewCardFeature: React.FC<ReviewCardFeatureProps> = ({
  reviewId
}) => {
  const review = useAppState((state) =>
    selectReviewById(state.reviews, reviewId)
  );

  const user = useAppState((state) =>
    selectUserById(state.users, review.userId)
  );

  return (
    <ReviewCard text={review.text} rating={review.rating} user={user.name} />
  );
};
