import React from 'react';
import { Typography, Box } from '@mui/material';

import LetterMatchWordCard from "@/components/LetterMatchGame/LetterMatchWordCard";

import { LetterMatchGameContainer, WordCardContainer } from './letterMatchGameStyle';

const leftOptions = ["左側選項1", "左側選項2", "左側選項3", "左側選項4", "左側選項5"];
// 右侧选项数据
const rightOptions = ["右側選項1", "右側選項2", "右側選項3", "右側選項4", "右側選項5"];

const LetterMatchGame: React.FC = () => {
  return (
    <LetterMatchGameContainer>
      <Typography variant="h5" gutterBottom>
        LetterMatchGame page
      </Typography>
      <WordCardContainer>
        <Box>
          {leftOptions.map((option, index) => (
            <LetterMatchWordCard key={`left_${index}`} optionSide="left" option={option} />
          ))}
        </Box>
        <Box>
          {rightOptions.map((option, index) => (
            <LetterMatchWordCard key={`right_${index}`} optionSide="right" option={option} />
          ))}
        </Box>
      </WordCardContainer>
    </LetterMatchGameContainer>
  );
};

export default LetterMatchGame;