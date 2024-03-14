import React, { useMemo } from 'react';
import { Typography } from '@mui/material';

import LetterMatchWordCard from "@/components/letterMatchGame/letterMatchWordCard";
import { useLetterMatchGameHook } from "./letterMatchGameHook";
import { LetterMatchGameContainer, WordCardContainer, SpaceBetweenSection } from './letterMatchGameStyle';

const LetterMatchGame: React.FC = () => {
  const { states, actions } = useLetterMatchGameHook();
  const { leftCardsInfo, rightCardsInfo } = states;
  const { handleWordCardClick } = actions;

  // 使用 useMemo 確保即使數據不變，也不會重新創建 LetterMatchWordCard
  const leftWordCards = useMemo(() => (
    leftCardsInfo.map((info, index) => (
      <LetterMatchWordCard key={`left-${index}`} cardInfo={info} handleWordCardClick={handleWordCardClick} />
    ))
  ), [leftCardsInfo, handleWordCardClick]);

  const rightWordCards = useMemo(() => (
    rightCardsInfo.map((info, index) => (
      <LetterMatchWordCard key={`right-${index}`} cardInfo={info} handleWordCardClick={handleWordCardClick} />
    ))
  ), [rightCardsInfo, handleWordCardClick]);

  return (
    <LetterMatchGameContainer>
      <Typography variant="h5" gutterBottom>
        LetterMatchGame page
      </Typography>
      <WordCardContainer>
        <SpaceBetweenSection>
          {leftWordCards}
        </SpaceBetweenSection>
        <SpaceBetweenSection>
          {rightWordCards}
        </SpaceBetweenSection>
      </WordCardContainer>
    </LetterMatchGameContainer>
  );
};

export default LetterMatchGame;