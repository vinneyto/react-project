import React from 'react';

import { ReviewCard } from '../../components';
import { useAppSelector } from '../../hooks';
import { selectReviewById, selectUserById } from '../../store';

interface ReviewCardFeatureProps {
  reviewId: string;
}

export const ReviewCardFeature: React.FC<ReviewCardFeatureProps> = ({
  reviewId
}) => {
  const review = useAppSelector((state) => selectReviewById(state, reviewId));

  const user = useAppSelector((state) => selectUserById(state, review?.userId));

  if (!review || !user) {
    return null;
  }

  return (
    <ReviewCard text={review.text} rating={review.rating} user={user.name} />
  );
};
