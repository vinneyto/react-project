import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { selectCartItemById, updateCartItem } from '../../store';

export const useCartCounter = (id: string) => {
  const dispatch = useDispatch();
  const quantity = useAppSelector((state) => selectCartItemById(state, id));

  const increment = useCallback(() => {
    dispatch(updateCartItem({ id, quantity: quantity + 1 }));
  }, [dispatch, id, quantity]);

  const decrement = useCallback(() => {
    dispatch(updateCartItem({ id, quantity: quantity - 1 }));
  }, [dispatch, id, quantity]);

  return { quantity, increment, decrement };
};
