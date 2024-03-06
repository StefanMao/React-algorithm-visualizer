import React from "react";
import { CardContent, Typography } from "@mui/material";
import WordCard from "@/common/ui/wordCard/WordCard";

import { LetterMatchWordCardContainer, WordCardNode, WordCardActionArea } from "./letterMatchWordCardStyle";
import type { ILetterMatchWordCardProps } from "./types/letterMatchWordCard";
import { useLetterMatchWordCardHook } from "./letterMatchWordCardHooks";


const LetterMatchWordCard: React.FC<ILetterMatchWordCardProps> = (props) => {
  const { cardInfo, handleWordCardClick } = props;
  const { states, actions } = useLetterMatchWordCardHook();
  const { boundaryRef } = states;
  const { handleMouseEnter, handleMouseLeave } = actions;

  return (
    <LetterMatchWordCardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <WordCard>
        <WordCardActionArea onClick={(e) => handleWordCardClick(e, cardInfo)}>
          <CardContent>
            <Typography variant="subtitle1">
              {cardInfo.details.showText}
            </Typography>
          </CardContent>
        </WordCardActionArea>
      </WordCard>
      <WordCardNode ref={boundaryRef} optionSide={cardInfo.side} />
    </LetterMatchWordCardContainer>
  );
};

export default LetterMatchWordCard;