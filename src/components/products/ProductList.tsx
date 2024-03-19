import React from 'react';
import Alert from '../ui/Alert';
import ProductCard from './ProductCard';
import { useAppSelector } from '../../hooks';

const ProductList = () => {
  const products: TProductList = useAppSelector((state) => state.products.data);

  return (
    <div className="row">
      {!products || Object.keys(products).length === 0 ? (
        <div className="col-md-12">
          <Alert type="danger">No product found!</Alert>
        </div>
      ) : (
        <>
          <h3 className="mb-4">Products</h3>
          {Object.entries(products).map(([key, product]) => (
            <div className="col-md-3" key={key}>
              <ProductCard product={product} key={key} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductList;
