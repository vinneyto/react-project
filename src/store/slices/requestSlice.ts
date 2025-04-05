import { GetThunkAPI, PayloadAction, createSlice } from '@reduxjs/toolkit';

export type RequestStatus = 'pending' | 'rejected' | 'fulfilled';
export type AsyncPayloadAction<T = unknown> = PayloadAction<
  T,
  string,
  GetThunkAPI<unknown>
>;

interface RequestsState {
  [requestId: string]: RequestStatus | undefined;
}

const initialState: RequestsState = {};

const requestsSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {},
  selectors: {
    selectIsLoading: (state: RequestsState, id: string) =>
      state[id] === 'pending',
    selectRequestStatus: (state: RequestsState, id: string) =>
      state[id] ?? 'pending'
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action: AsyncPayloadAction) => action.type.endsWith('pending'),
        (state, action: AsyncPayloadAction) => {
          if (action.meta?.requestId) {
            state[action.meta.requestId] = 'pending';
          }
        }
      )
      .addMatcher(
        (action: AsyncPayloadAction) => action.type.endsWith('rejected'),
        (state, action: AsyncPayloadAction) => {
          if (action.meta?.requestId) {
            state[action.meta.requestId] = 'rejected';
          }
        }
      )
      .addMatcher(
        (action: AsyncPayloadAction) => action.type.endsWith('fulfilled'),
        (state, action: AsyncPayloadAction) => {
          if (action.meta?.requestId) {
            state[action.meta.requestId] = 'fulfilled';
          }
        }
      );
  }
});

export const requestsSliceReducer = requestsSlice.reducer;

export const { selectIsLoading, selectRequestStatus } = requestsSlice.selectors;
