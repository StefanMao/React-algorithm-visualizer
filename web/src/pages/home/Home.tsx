import React from 'react';
import { Typography } from '@mui/material';
import { HomeContainer } from './homeStyle';

const Home: React.FC = () => {
  return (
    <HomeContainer maxWidth={false}>
      <Typography variant="h1" gutterBottom>
        Home page
      </Typography>
    </HomeContainer>
  );
};

export default Home;
