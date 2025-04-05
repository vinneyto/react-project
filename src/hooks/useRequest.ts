import { GetThunkAPI } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';

import { selectRequestStatus } from '../store';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useRequest = <T extends (...args: any[]) => any>(
  thunk: T,
  ...args: Parameters<T>
) => {
  const dispatch = useAppDispatch();

  const [request, setRequest] = useState<GetThunkAPI<unknown> | null>(null);

  const requestStatus = useAppSelector((state) =>
    selectRequestStatus(state, request?.requestId || '')
  );

  useEffect(() => {
    const request = dispatch(thunk(...args)) as GetThunkAPI<unknown>;
    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, thunk, ...args]);

  return requestStatus;
};
