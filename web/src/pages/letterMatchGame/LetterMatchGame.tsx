import React from 'react';
import { Typography } from '@mui/material';

import LetterMatchWordCard from "@/components/LetterMatchGame/LetterMatchWordCard";

import { LetterMatchGameContainer, WordCardContainer } from './letterMatchGameStyle';


const LetterMatchGame: React.FC = () => {
  return (
    <LetterMatchGameContainer>
      <Typography variant="h5" gutterBottom>
        LetterMatchGame page
      </Typography>
      <WordCardContainer>
        <LetterMatchWordCard />
        <LetterMatchWordCard />
      </WordCardContainer>
    </LetterMatchGameContainer>
  );
};

export default LetterMatchGame;