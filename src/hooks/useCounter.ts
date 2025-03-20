import { useCallback, useState } from 'react';

export const useCounter = (initialValue: number) => {
  const [quantity, setQuantity] = useState(initialValue);

  const increment = useCallback(() => {
    setQuantity((quantity) => quantity + 1);
  }, []);

  const decrement = useCallback(() => {
    setQuantity((quantity) => quantity + 1);
  }, []);

  return { quantity, increment, decrement };
};
