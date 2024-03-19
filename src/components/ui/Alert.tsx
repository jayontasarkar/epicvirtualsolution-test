import React from 'react';

type TProps = {
  type?: string;
  children: React.ReactNode;
};

const Alert: React.FC<TProps> = ({ type = 'success', children }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;
