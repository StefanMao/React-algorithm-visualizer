import React from 'react';
import { Typography, Box } from '@mui/material';

import LetterMatchWordCard from "@/components/letterMatchGame/letterMatchWordCard";
import { useLetterMatchGameHook } from "./letterMatchGameHook";
import { LetterMatchGameContainer, WordCardContainer } from './letterMatchGameStyle';

const LetterMatchGame: React.FC = () => {
  const { states, actions } = useLetterMatchGameHook();
  const { leftCardsInfo, rightCardsInfo } = states;
  const { handleWordCardClick } = actions;

  return (
    <LetterMatchGameContainer>
      <Typography variant="h5" gutterBottom>
        LetterMatchGame page
      </Typography>
      <WordCardContainer>
        <Box>
          {leftCardsInfo.map((info, index) => (
            <LetterMatchWordCard key={`left-${index}`} cardInfo={info} handleWordCardClick={handleWordCardClick} />
          ))}
        </Box>
        <Box>
          {rightCardsInfo.map((info, index) => (
            <LetterMatchWordCard key={`right-${index}`} cardInfo={info} handleWordCardClick={handleWordCardClick} />
          ))}
        </Box>
      </WordCardContainer>
    </LetterMatchGameContainer>
  );
};

export default LetterMatchGame;