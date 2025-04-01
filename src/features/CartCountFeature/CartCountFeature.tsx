import React from 'react';

import { Button } from '../../components';
import { useAppState } from '../../hooks';
import { selectTotalCartItems } from '../../store';

export const CartCountFeature: React.FC = () => {
  const cartCount = useAppState((state) => selectTotalCartItems(state.cart));

  return (
    <Button
      onClick={() => console.log('show cart content')}
      size="sm"
      secondary
      isRounded
    >
      {cartCount}
    </Button>
  );
};
