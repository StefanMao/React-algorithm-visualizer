import React from "react";
import { WordCardContainer } from "./WordCardStyle";

type WordCardProps = {
  children: React.ReactNode;
};

const WordCard: React.FC<WordCardProps> = (props) => {
  return (
    <WordCardContainer elevation={8}>
      {props.children}
    </WordCardContainer>
  );
};

export default WordCard;