import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { IWordCardNodeProps } from './LetterMatchWordCard.d';

export const LetterMatchWordCardContainer = styled(Box)`
  height: 70px;
  position: relative;
  border: 2px dashed transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #9D9D9D;
  }
`;

export const WordCardNode = styled.svg`
  position: absolute;
   ${(props: IWordCardNodeProps) => props.optionSide === 'left' ? 'right: -12px;' : 'left: -12px;'}
  top: 50%;
  transform: translateY(-50%);
  height: 12px;
  width: 12px;
`;
