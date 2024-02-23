import React from 'react';

import { FooterContainer } from './footerStyles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
