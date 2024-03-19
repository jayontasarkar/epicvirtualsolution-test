import React from 'react';
import Navbar from '../components/navbar/Navbar';

type TProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<TProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container py-5">{children}</div>
    </>
  );
};

export default MainLayout;
