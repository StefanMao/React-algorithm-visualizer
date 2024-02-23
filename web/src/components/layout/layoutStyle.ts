import styled from '@emotion/styled';
import { Container, Box } from '@mui/material';

export const LayoutContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: none !important; /* 覆蓋 MUI 預設的 maxWidth 等同於 maxWidth = {false} */
  padding: 0 !important; /* 覆蓋 MUI 預設的 padding 等同於 disableGutters */
`;

export const MainContainer = styled(Box)`
  display: flex;
  flex: 1;
`;
