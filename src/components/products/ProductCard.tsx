import React from 'react';
import ShoppingCartIcon from '../icons/ShoppingCartIcon';
import Button from '../ui/Button';
import { useAppDispatch } from '../../hooks';
import { addItemIntoCart } from '../../store/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(
      addItemIntoCart({
        ...product,
        Quantity: 1,
      })
    );
    toast.success('Product added to cart');
  };

  return (
    <div className="card shadow mb-3">
      <img src={product.Image} alt={product.Title} />
      <div className="card-footer bg-gray-200 border-top border-gray-300 p-4">
        <h2 className="h4">{product.Title}</h2>
        <div className="d-flex mt-2">
          <span className="badge bg-primary">Release year: {product.Year}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="h6 mb-0 text-gray">${product.Price}</span>
          <Button
            size="small"
            outline
            variant="primary"
            onClick={handleOnClick}
          >
            <ShoppingCartIcon /> Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
