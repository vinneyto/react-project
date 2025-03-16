import React from 'react';

import { Button } from '../../components/Button';
import { Counter } from '../../components/Counter';
import { Input } from '../../components/Input';
import styles from './ReviewForm.module.css';
import { useReviewFormReducer } from './useReviewFormReducer';

const MIN_RATING = 1;
const MAX_RATING = 5;

export const ReviewForm: React.FC = () => {
  const {
    state,
    setName,
    setText,
    incrementRating,
    decrementRating,
    clearForm
  } = useReviewFormReducer();

  return (
    <form className={styles.reviewForm}>
      <Input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className={styles.reviewTextarea}
        placeholder="Text"
        value={state.text}
        onChange={(e) => setText(e.target.value)}
      />
      <Counter
        quantity={state.rating}
        increment={incrementRating}
        decrement={decrementRating}
        min={MIN_RATING}
        max={MAX_RATING}
      />
      <Button type="button" secondary onClick={clearForm}>
        Clear
      </Button>
    </form>
  );
};
