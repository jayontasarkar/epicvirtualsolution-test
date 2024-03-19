import React from 'react';

const ScreenLoader = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-12 d-flex align-items-center justify-content-center"
          style={{ minHeight: '100vh' }}
        >
          <div>
            <div className="spinner-grow text-primary me-1" role="status"></div>
            <div
              className="spinner-grow text-secondary me-1"
              role="status"
            ></div>
            <div className="spinner-grow text-success me-1" role="status"></div>
            <div className="spinner-grow text-danger me-1" role="status"></div>
            <div className="spinner-grow text-warning me-1" role="status"></div>
            <div className="spinner-grow text-info me-1" role="status"></div>
            <div className="spinner-grow text-dark me-1" role="status"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenLoader;
