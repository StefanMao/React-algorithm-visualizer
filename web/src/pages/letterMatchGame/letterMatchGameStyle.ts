import styled from '@emotion/styled';
import { Container, Box } from '@mui/material';

export const LetterMatchGameContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WordCardContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid blue;
  width: 750px;
  height: 500px;
  padding: 20px;
`;
