import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/store/hook';
import {
  setLeftSelected,
  setRightSelected,
  selectedWordCard,
} from '@/store/letterMatchGameStore/letterMatchGameSlice';
import type {
  IWordCardInfo,
  WordCardMatchStatus,
} from '@/components/letterMatchGame/letterMatchWordCard/types/letterMatchWordCard';
import type { ILetterMatchGameHook } from './types/letterMatchGame';

const MAX_QUESTIONS = 5;

const initializeLeftCardsInfo = (maxCardCount: number): IWordCardInfo[] => {
  const initialLeftCardsInfo: IWordCardInfo[] = [];
  for (let i = 0; i < maxCardCount; i++) {
    initialLeftCardsInfo.push({
      id: `left-${i + 1}`,
      status: 'pending',
      side: 'left',
      details: { thaiWordId: `${i + 1}`, showText: `左側選項${i + 1}` },
    });
  }
  return initialLeftCardsInfo;
};

const initializeRightCardsInfo = (maxCardCount: number): IWordCardInfo[] => {
  const initialRightCardsInfo: IWordCardInfo[] = [];
  for (let i = 0; i < maxCardCount; i++) {
    initialRightCardsInfo.push({
      id: `right-${i + 1}`,
      status: 'pending',
      side: 'right',
      details: { thaiWordId: `${i + 1}`, showText: `右側選項${i + 1}` },
    });
  }
  return initialRightCardsInfo;
};

export const useLetterMatchGameHook = (): ILetterMatchGameHook => {
  const selectedCard = useAppSelector(selectedWordCard);
  const dispatch = useAppDispatch();

  const [leftCardsInfo, setLeftCardsInfo] = useState<IWordCardInfo[]>(() =>
    initializeLeftCardsInfo(MAX_QUESTIONS),
  );
  const [rightCardsInfo, setRightCardsInfo] = useState<IWordCardInfo[]>(() =>
    initializeRightCardsInfo(MAX_QUESTIONS),
  );

  const handleWordCardClick = (
    _: React.MouseEvent<HTMLButtonElement>,
    cardInfo: IWordCardInfo,
  ): void => {
    const { id, side, status } = cardInfo;
    if (status === 'matched') return;

    const cardsInfoToUpdate = side === 'left' ? leftCardsInfo : rightCardsInfo;
    // 更新卡片狀態
    const updatedCardsInfo = updateCardStatus(cardsInfoToUpdate, id);
    const dispatchData = { ...cardInfo, status: 'selected' as WordCardMatchStatus };

    if (side === 'left') {
      setLeftCardsInfo(updatedCardsInfo);
      dispatch(setLeftSelected(dispatchData));
    } else if (side === 'right') {
      setRightCardsInfo(updatedCardsInfo);
      dispatch(setRightSelected(dispatchData));
    }
  };

  const updateCardStatus = (cardsInfo: IWordCardInfo[], clickedCardId: string): IWordCardInfo[] => {
    return cardsInfo.map((card) => {
      if (card.id === clickedCardId) {
        // 如果點擊的卡片是要更新的卡片，則將其狀態設置為 'selected'
        return { ...card, status: 'selected' };
      } else if (card.status === 'selected') {
        return { ...card, status: 'pending' };
      }
      return card;
    });
  };

  const checkConnectMatchingCard = (): void => {
    if (!selectedCard.left || !selectedCard.right) return;

    const { left, right } = selectedCard;
    if (left.details.thaiWordId === right.details.thaiWordId) {
      // 如果相等，將兩側卡片的狀態設置為 matched
      const updatedLeftCardsInfo = leftCardsInfo.map((card) =>
        card.id === left.id ? { ...card, status: 'matched' as WordCardMatchStatus } : card,
      );

      const updatedRightCardsInfo = rightCardsInfo.map((card) => (
        card.id === right.id ? { ...card, status: 'matched' as WordCardMatchStatus } : card
      ));

      setLeftCardsInfo(updatedLeftCardsInfo);
      setRightCardsInfo(updatedRightCardsInfo);

      // 重置 selectedCard
      dispatch(setRightSelected(null));
      dispatch(setLeftSelected(null));
    }
  };

  useEffect(() => {
    checkConnectMatchingCard();
  }, [selectedCard, leftCardsInfo, rightCardsInfo]);

  useEffect(() => {
    console.log('leftCardsInfo', leftCardsInfo);
    console.log('rightCardsInfo', rightCardsInfo);
  }, [leftCardsInfo, rightCardsInfo]);

  const states = { leftCardsInfo, rightCardsInfo };
  const actions = { handleWordCardClick };

  return { states, actions };
};
