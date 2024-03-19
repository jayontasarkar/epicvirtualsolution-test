import React from 'react';
import { APP_NAME } from '../constants';

const HomePage = () => {
  return (
    <div className="row">
      <div
        className="col-md-12 d-flex align-items-center justify-content-center"
        style={{ minHeight: '80vh' }}
      >
        <h1>Welcome to {APP_NAME}</h1>
      </div>
    </div>
  );
};

export default HomePage;
