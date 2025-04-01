import React from 'react';

import { ReviewCard } from '../../components';
import { useAppState } from '../../hooks';
import { selectReviewById, selectUserById } from '../../store';

interface ReviewCardProps {
  reviewId: string;
}

export const ReviewCardFeature: React.FC<ReviewCardProps> = ({ reviewId }) => {
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
