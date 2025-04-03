import React from 'react';

import { Button } from '../../components';
import { useAppSelector } from '../../hooks';
import { selectTotalCartItems } from '../../store';

export const CartCountFeature: React.FC = () => {
  const cartCount = useAppSelector(selectTotalCartItems);

  return (
    <Button size="sm" secondary isRounded>
      {cartCount}
    </Button>
  );
};
