import { useState, useEffect, useCallback } from 'react';
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
    const updatedCardsInfo = updateSideCardStatus(cardsInfoToUpdate, id);
    const dispatchData = { ...cardInfo, status: 'selected' as WordCardMatchStatus };

    if (side === 'left') {
      setLeftCardsInfo(updatedCardsInfo);
      dispatch(setLeftSelected(dispatchData));
    } else if (side === 'right') {
      setRightCardsInfo(updatedCardsInfo);
      dispatch(setRightSelected(dispatchData));
    }
  };

  /**
   * 每一次點擊字卡，都需要更新同一側其他未點擊的字卡狀態
   * @param cardsInfo
   * @param clickedCardId
   * @returns
   */
  const updateSideCardStatus = (
    cardsInfo: IWordCardInfo[],
    clickedCardId: string,
  ): IWordCardInfo[] => {
    return cardsInfo.map((card) => {
      if (card.id === clickedCardId) {
        // 如果點擊的卡片是要更新的卡片，則將其狀態設置為 'selected'
        return { ...card, status: 'selected' };
      } else if (card.status !== 'matched') {
        return { ...card, status: 'pending' };
      }
      return card;
    });
  };

  const checkConnectMatchingCard = useCallback((): void => {
    if (!selectedCard.left || !selectedCard.right) return;

    const { left, right } = selectedCard;
    const isCorrectAnswer = left.details.thaiWordId === right.details.thaiWordId;

    const updateCardInfo = (cardsInfo: IWordCardInfo[], targetId: string): IWordCardInfo[] =>
      cardsInfo.map((card) => ({
        ...card,
        status:
          card.status === 'matched'
            ? card.status
            : card.id === targetId
            ? isCorrectAnswer
              ? 'matched'
              : 'pending'
            : card.status,
      }));

    // 更新左側卡片的狀態
    const updatedLeftCardsInfo = updateCardInfo(leftCardsInfo, left.id);

    // 更新右側卡片的狀態
    const updatedRightCardsInfo = updateCardInfo(rightCardsInfo, right.id);

    // 更新狀態
    setLeftCardsInfo(updatedLeftCardsInfo);
    setRightCardsInfo(updatedRightCardsInfo);

    // 重置 selectedCard
    dispatch(setRightSelected(null));
    dispatch(setLeftSelected(null));
  }, [dispatch, leftCardsInfo, rightCardsInfo, selectedCard]);

  useEffect(() => {
    checkConnectMatchingCard();
  }, [selectedCard, checkConnectMatchingCard]);

  const states = { leftCardsInfo, rightCardsInfo };
  const actions = { handleWordCardClick };

  return { states, actions };
};
