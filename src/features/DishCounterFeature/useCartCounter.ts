import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useAppState } from '../../hooks';
import { selectCartItemById, updateCartItem } from '../../store';

export const useCartCounter = (id: string) => {
  const dispatch = useDispatch();
  const quantity = useAppState((state) => selectCartItemById(state.cart, id));

  const increment = useCallback(() => {
    dispatch(updateCartItem({ id, quantity: quantity + 1 }));
  }, [dispatch, id, quantity]);

  const decrement = useCallback(() => {
    dispatch(updateCartItem({ id, quantity: quantity - 1 }));
  }, [dispatch, id, quantity]);

  return { quantity, increment, decrement };
};
