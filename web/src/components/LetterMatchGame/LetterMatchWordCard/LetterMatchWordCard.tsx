import React, { useRef, useState, useEffect } from "react";
import { CardContent, Typography } from "@mui/material";
import { select } from "d3";

import WordCard from "@/common/wordCard/WordCard";
import type { ILetterMatchWordCardUseHook, ILetterMatchWordCardProps } from "./LetterMatchWordCard.d";
import { LetterMatchWordCardContainer, WordCardNode } from "./LetterMatchWordCardStyle";

export const useHook = (): ILetterMatchWordCardUseHook => {
  const [hovered, setHovered] = useState(false);
  const boundaryRef = useRef(null);

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  useEffect(() => {
    if (hovered) {
      const boundaryNode = select(boundaryRef.current);
      boundaryNode
        .append("circle")
        .attr("cx", 6)
        .attr("cy", '50%')
        .attr("r", 5)
        .style("fill", "black");
    } else {
      select(boundaryRef.current).selectAll("*").remove();
    }
  }, [hovered]);

  const states = { boundaryRef };
  const actions = { handleMouseEnter, handleMouseLeave };
  return { states, actions };
};

const LetterMatchWordCard: React.FC<ILetterMatchWordCardProps> = () => {
  const { states, actions } = useHook();

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
      <WordCardNode ref={boundaryRef} />
    </LetterMatchWordCardContainer>
  );
};

export default LetterMatchWordCard;