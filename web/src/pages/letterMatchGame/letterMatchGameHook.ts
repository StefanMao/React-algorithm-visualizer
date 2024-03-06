import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/store/hook';
import { setLeftSelected, selectedWordCard } from '@/store/letterMatchGameStore/letterMatchGameSlice';
import type { IWordCardInfo } from '@/components/letterMatchGame/letterMatchWordCard/types/letterMatchWordCard';
import type { ILetterMatchGameHook } from './types/letterMatchGame';

const MAX_QUESTIONS = 5;

const initializeLeftCardsInfo = (maxCardCount: number): IWordCardInfo[] => {
  const initialLeftCardsInfo: IWordCardInfo[] = [];
  for (let i = 0; i < maxCardCount; i++) {
    initialLeftCardsInfo.push({
      status: 'pending',
      side: 'left',
      details: { thaiWordId: `${i + 1}`, id: `left-${i + 1}`, showText: `左側選項${i + 1}` },
    });
  }
  return initialLeftCardsInfo;
};

const initializeRightCardsInfo = (maxCardCount: number): IWordCardInfo[] => {
  const initialRightCardsInfo: IWordCardInfo[] = [];
  for (let i = 0; i < maxCardCount; i++) {
    initialRightCardsInfo.push({
      status: 'pending',
      side: 'right',
      details: { thaiWordId: `${i + 1}`, id: `right-${i + 1}`, showText: `右側選項${i + 1}` },
    });
  }
  return initialRightCardsInfo;
};

export const useLetterMatchGameHook = (): ILetterMatchGameHook => {
  const selectedCard = useAppSelector(selectedWordCard);
  const dispatch = useAppDispatch();
  
  const [leftCardsInfo] = useState<IWordCardInfo[]>(() =>
    initializeLeftCardsInfo(MAX_QUESTIONS),
  );
  const [rightCardsInfo] = useState<IWordCardInfo[]>(() =>
    initializeRightCardsInfo(MAX_QUESTIONS),
  );

  const handleWordCardClick = (
    _: React.MouseEvent<HTMLButtonElement>,
    cardInfo: IWordCardInfo,
  ): void => {
    dispatch(setLeftSelected(cardInfo));
  };

  useEffect(() => {
    console.log('selected', selectedCard);
  }, [selectedCard]);

  const states = { leftCardsInfo, rightCardsInfo };
  const actions = { handleWordCardClick };

  return { states, actions };
};
