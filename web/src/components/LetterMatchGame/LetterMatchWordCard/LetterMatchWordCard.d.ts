export interface ILetterMatchWordCardUseHook {
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
  optionSide: WordCardSide;
  option?: null | string;
}
export interface IWordCardNodeProps {
  optionSide: WordCardSide;
}

type WordCardSide = "left" | "right";