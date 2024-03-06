import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IWordCardInfo } from '@/components/letterMatchGame/letterMatchWordCard/types/letterMatchWordCard';
import { RootState } from '..';

export interface SelectedWordCardsState {
  left: IWordCardInfo | null;
  right: IWordCardInfo | null;
}

const initialState: SelectedWordCardsState = {
  left: null,
  right: null,
};

export const letterMatchGameSlice = createSlice({
  name: 'letterMatchGame',
  initialState,
  reducers: {
    setLeftSelected: (state, action: PayloadAction<IWordCardInfo | null>) => {
      state.left = action.payload;
    },
    setRightSelected: (state, action: PayloadAction<IWordCardInfo | null>) => {
      state.right = action.payload;
    },
  },
});

export const selectedWordCard = (state: RootState) => state.letterMatchGame;
export const { setLeftSelected, setRightSelected } = letterMatchGameSlice.actions;

export default letterMatchGameSlice.reducer;
