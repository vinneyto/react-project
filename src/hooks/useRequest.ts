import { GetThunkAPI } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';

import { RequestStatus, selectRequestStatus } from '../store';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useRequest = <T extends (...args: any[]) => any>(
  thunk: T,
  ...args: Parameters<T>
): RequestStatus => {
  const dispatch = useAppDispatch();

  const [requestId, setRequestId] = useState<string | null>(null);

  const requestStatus = useAppSelector((state) =>
    selectRequestStatus(state, requestId ?? '')
  );

  useEffect(() => {
    const request = dispatch(thunk(...args)) as GetThunkAPI<unknown>;
    setRequestId(request.requestId);

    return () => {
      request.abort();
      setRequestId(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, thunk, ...args]);

  // статус pending пока не сделали запрос
  return requestId ? requestStatus : 'pending';
};
