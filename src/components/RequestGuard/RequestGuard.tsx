import React from 'react';

import { RequestStatus } from '../../store';
import { Placeholder } from '../Placeholder';

interface RequestGuardProps {
  status: RequestStatus;
  pendingText: string;
  errorText: string;
  children: React.ReactNode;
}

export const RequestGuard: React.FC<RequestGuardProps> = ({
  status,
  pendingText,
  errorText,
  children
}) => {
  if (status === 'pending') {
    return <Placeholder>{pendingText}</Placeholder>;
  }

  if (status === 'rejected') {
    return <Placeholder>{errorText}</Placeholder>;
  }

  return children;
};
