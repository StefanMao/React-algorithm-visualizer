import React from "react";
import { CardContent, Typography } from "@mui/material";
import WordCard from "@/common/wordCard/WordCard";

const LetterMatchWordCard: React.FC = () => {
  return (
    <WordCard>
      <CardContent>
        <Typography variant="subtitle1">
          泰文單字
        </Typography>
      </CardContent>
    </WordCard>
  );
};

export default LetterMatchWordCard;