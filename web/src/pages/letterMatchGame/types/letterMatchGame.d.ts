import type { IWordCardInfo } from '@/components/letterMatchGame/letterMatchWordCard/letterMatchWordCard';

export interface ILetterMatchGameHook {
  states: ILetterMatchGameStates;
  actions: ILetterMatchGameAction;
}

export interface ILetterMatchGameStates {
  leftCardsInfo: IWordCardInfo[];
  rightCardsInfo: IWordCardInfo[];
}

export interface ILetterMatchGameAction {
  handleWordCardClick: (e: React.MouseEvent<HTMLButtonElement>, cardInfo: IWordCardInfo) => void;
}
