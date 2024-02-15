import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Loader from '@/components/loader/Loader';
import './_layout.scss';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
