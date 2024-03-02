export interface ILetterMatchWordCardUseHook {
  states: ILetterMatchWordCardStates;
  actions: ILetterMatchWordCardAction;
}

export interface ILetterMatchWordCardAction {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export interface ILetterMatchWordCardStates {
  boundaryRef: React.RefObject<any>;
}

export interface ILetterMatchWordCardProps {
  optionSide: WordCardSide;
  options: any;
}
export interface IWordCardNodeProps {
  optionSide: WordCardSide;
}

type WordCardSide = "left" | "right";