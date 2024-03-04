import React from "react";
import { CardContent, Typography } from "@mui/material";
import WordCard from "@/common/wordCard/WordCard";

import { LetterMatchWordCardContainer, WordCardNode } from "./LetterMatchWordCardStyle";
import type { ILetterMatchWordCardProps } from "./LetterMatchWordCard.d";
import { useLetterMatchWordCardHook } from "./LetterMatchWordCardHooks";


const LetterMatchWordCard: React.FC<ILetterMatchWordCardProps> = (props) => {
  const { optionSide } = props;
  const { states, actions } = useLetterMatchWordCardHook();
  const { boundaryRef } = states;
  const { handleMouseEnter, handleMouseLeave } = actions;

  return (
    <LetterMatchWordCardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <WordCard>
        <CardContent>
          <Typography variant="subtitle1">
            泰文單字
          </Typography>
        </CardContent>
      </WordCard>
      <WordCardNode ref={boundaryRef} optionSide={optionSide} />
    </LetterMatchWordCardContainer>
  );
};

export default LetterMatchWordCard;