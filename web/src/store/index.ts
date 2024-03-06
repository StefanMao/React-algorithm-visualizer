import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import letterMatchGameReducer from './letterMatchGameStore/letterMatchGameSlice';

export const store = configureStore({
  reducer: {
    letterMatchGame: letterMatchGameReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;