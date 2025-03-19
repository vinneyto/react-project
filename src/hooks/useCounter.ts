import { useCallback, useState } from 'react';

export const useCounter = (initialValue: number) => {
  const [quantity, setQuantity] = useState(initialValue);

  const increment = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const decrement = useCallback(() => {
    setQuantity(quantity - 1);
  }, [quantity]);

  return { quantity, increment, decrement };
};
