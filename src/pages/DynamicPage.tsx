import React from 'react';
import { capitalize } from '../utils';
import { useParams } from 'react-router-dom';
import ProductList from '../components/products/ProductList';

type TParams = {
  page: string;
};

const DynamicPage = () => {
  const { page } = useParams<TParams>();

  return (
    <div className="row">
      {page?.toLowerCase() === 'mobile' ? (
        <ProductList />
      ) : (
        <div
          className="col-md-12 d-flex align-items-center justify-content-center"
          style={{ minHeight: '80vh' }}
        >
          <h1>You are on {capitalize(page as string)} page</h1>
        </div>
      )}
    </div>
  );
};

export default DynamicPage;
