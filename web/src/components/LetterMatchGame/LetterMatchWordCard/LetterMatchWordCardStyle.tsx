import styled from '@emotion/styled';
import { Box, CardActionArea } from '@mui/material';
import { IWordCardNodeProps, ILetterMatchWordCardContainerStyleProps } from './types/letterMatchWordCard';

export const LetterMatchWordCardContainer = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'cardInfo',
}) <ILetterMatchWordCardContainerStyleProps>`
  height: 70px;
  position: relative;
  border: 2px dashed transparent;
  transition: border-color 0.3s ease;
  border: ${(props) => {
    const { status } = props.cardInfo;
    return status === 'matched' ? '2px solid #02C874': '';
  }};
  border-color: ${(props) => {
    const { status } = props.cardInfo;
    return status === 'selected' ? '#9d9d9d' : status === 'matched' ? '#02C874' : 'transparent';
  }};
  &:hover {
    border-color: #9d9d9d;
  }
`;

export const WordCardNode = styled.svg`
  position: absolute;
  ${(props: IWordCardNodeProps) => (props.optionSide === 'left' ? 'right: -12px;' : 'left: -12px;')}
  top: 50%;
  transform: translateY(-50%);
  height: 12px;
  width: 12px;
`;

export const WordCardActionArea = styled(CardActionArea)`
  display: flex;
  height: 100%;
`;
