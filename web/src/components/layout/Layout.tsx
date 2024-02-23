import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Loader from '@/components/loader/Loader';

import { LayoutContainer, MainContainer } from './layoutStyle';

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
