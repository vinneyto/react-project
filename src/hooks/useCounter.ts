import { useState } from 'react';

export const useCounter = (initialValue: number) => {
  const [quantity, setQuantity] = useState(initialValue);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return { quantity, increment, decrement };
};
