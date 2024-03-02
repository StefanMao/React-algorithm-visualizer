import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const LetterMatchWordCardContainer = styled(Box)`
  height: 75px;
  position: relative;
`;

export const WordCardNode = styled.svg`
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  height: 12px;
  width: 12px;
`;
