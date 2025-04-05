import React from 'react';

import { RequestStatus } from '../../store';
import { Placeholder } from '../Placeholder';

interface RequestGuardProps {
  status: RequestStatus | RequestStatus[];
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
  const statusArray = Array.isArray(status) ? status : [status];

  if (statusArray.includes('pending')) {
    return <Placeholder>{pendingText}</Placeholder>;
  }

  if (statusArray.includes('rejected')) {
    return <Placeholder>{errorText}</Placeholder>;
  }

  return <>{children}</>;
};
