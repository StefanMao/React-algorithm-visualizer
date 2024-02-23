import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

import { HeaderContainer, LogoContainer } from './headerStyle';
import PathConstants from '../../routes/pathConstants';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <h3>
          <Link to={PathConstants.HOME}>泰時刻</Link>
        </h3>
        <Divider sx={{ mr: 4 }}></Divider>
        <h3>
          <Link to={PathConstants.LETTER_MATCH_GAME}>泰文連連看</Link>
        </h3>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
