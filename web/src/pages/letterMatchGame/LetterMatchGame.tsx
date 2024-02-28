import React from 'react';
import { Typography } from '@mui/material';

import WordCard from "@/common/wordCard/WordCard";

import { LetterMatchGameContainer, WordCardContainer } from './letterMatchGameStyle';


const LetterMatchGame: React.FC = () => {
  return (
    <LetterMatchGameContainer>
      <Typography variant="h5" gutterBottom>
        LetterMatchGame page
      </Typography>
      <WordCardContainer>
        <WordCard />
        <WordCard />
      </WordCardContainer>
    </LetterMatchGameContainer>
  );
};

export default LetterMatchGame;