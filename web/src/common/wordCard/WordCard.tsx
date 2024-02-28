import React from "react";
import { CardContent, Typography } from "@mui/material";
import { WordCardContainer } from "./WordCardStyle";

const WordCard: React.FC = () => {
  return (
    <WordCardContainer elevation={8}>
      <CardContent>
        <Typography variant="subtitle1">
          泰文單字
        </Typography>
      </CardContent>
    </WordCardContainer>
  );
};
export default WordCard;