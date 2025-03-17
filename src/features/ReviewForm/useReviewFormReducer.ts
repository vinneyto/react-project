import { useReducer } from 'react';

interface ReviewFormState {
  name: string;
  text: string;
  rating: number;
}

export const MIN_RATING = 1;
export const MAX_RATING = 5;

const initialState: ReviewFormState = {
  name: '',
  text: '',
  rating: MIN_RATING
};

type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_TEXT'; payload: string }
  | { type: 'SET_RATING'; payload: number }
  | { type: 'INCREMENT_RATING' }
  | { type: 'DECREMENT_RATING' }
  | { type: 'CLEAR' };

const reducer = (state: ReviewFormState, action: Action): ReviewFormState => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    case 'SET_RATING':
      return { ...state, rating: action.payload };
    case 'INCREMENT_RATING':
      return { ...state, rating: Math.min(state.rating + 1, MAX_RATING) };
    case 'DECREMENT_RATING':
      return { ...state, rating: Math.max(state.rating - 1, MIN_RATING) };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
};

export const useReviewFormReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setName = (name: string) =>
    dispatch({ type: 'SET_NAME', payload: name });
  const setText = (text: string) =>
    dispatch({ type: 'SET_TEXT', payload: text });
  const setRating = (rating: number) =>
    dispatch({ type: 'SET_RATING', payload: rating });
  const incrementRating = () => dispatch({ type: 'INCREMENT_RATING' });
  const decrementRating = () => dispatch({ type: 'DECREMENT_RATING' });
  const clearForm = () => dispatch({ type: 'CLEAR' });

  return {
    state,
    setName,
    setText,
    setRating,
    incrementRating,
    decrementRating,
    clearForm
  };
};
