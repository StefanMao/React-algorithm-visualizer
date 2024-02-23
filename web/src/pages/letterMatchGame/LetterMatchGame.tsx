import React from 'react';
import { Typography } from '@mui/material';

import { LetterMatchGameContainer } from './letterMatchGameStyle';

const LetterMatchGame: React.FC = () => {
  return (
    <LetterMatchGameContainer>
      <Typography variant="h1" gutterBottom>
        LetterMatchGame page
      </Typography>
    </LetterMatchGameContainer>
  );
};

export default LetterMatchGame;