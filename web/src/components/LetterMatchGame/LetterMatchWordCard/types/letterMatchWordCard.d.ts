export interface ILetterMatchWordCardHook {
  states: ILetterMatchWordCardStates;
  actions: ILetterMatchWordCardAction;
}

export interface ILetterMatchWordCardAction {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export interface ILetterMatchWordCardStates {
  boundaryRef: React.RefObject<SVGSVGElement>;
}

export interface ILetterMatchWordCardProps {
  cardInfo: IWordCardInfo;
  handleWordCardClick: (e: React.MouseEvent<HTMLButtonElement>, cardInfo: IWordCardInfo) => void;
}
export interface IWordCardNodeProps {
  optionSide: WordCardPairSide;
}

export interface IWordCardInfo {
  status: WordCardMatchStatus;
  side: WordCardPairSide;
  details: IWordCardDetails;
}

export interface IWordCardDetails {
  id: string; // 字卡id
  thaiWordId: string; // 單字id
  showText: string;
}

// 定義字卡的狀態: 已選擇、待匹配、已匹配
type WordCardMatchStatus = 'selected' | 'pending' | 'matched';

// 定義字卡的位置，可以是左側或右側
type WordCardPairSide = 'left' | 'right';
