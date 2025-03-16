import React from 'react';

import { Button } from '../../components/Button';
import { Counter } from '../../components/Counter/Counter';
import { Input } from '../../components/Input/Input';
// Import the hook
import styles from './ReviewForm.module.css';
import { useReviewFormReducer } from './useReviewFormReducer';

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
        min={1}
        max={5}
      />
      <Button type="button" className={styles.clearButton} onClick={clearForm}>
        Clear
      </Button>
    </form>
  );
};
