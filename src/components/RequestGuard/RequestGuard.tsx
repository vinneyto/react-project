import React from 'react';

import { RequestStatus } from '../../store';
import { Placeholder } from '../Placeholder';

interface RequestGuardProps {
  status?: RequestStatus;
  pendingText: string;
  errorText: string;
  children: React.ReactNode;
  isLoading?: boolean;
  isError?: boolean;
}

export const RequestGuard: React.FC<RequestGuardProps> = ({
  status,
  pendingText,
  errorText,
  children,
  isLoading,
  isError
}) => {
  if (status === 'pending' || isLoading) {
    return <Placeholder>{pendingText}</Placeholder>;
  }

  if (status === 'rejected' || isError) {
    return <Placeholder>{errorText}</Placeholder>;
  }

  return children;
};
